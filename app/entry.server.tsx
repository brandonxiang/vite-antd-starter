import { PassThrough } from 'node:stream';

import type { EntryContext } from 'react-router';
import { createReadableStreamFromReadable } from '@react-router/node';
import { ServerRouter } from 'react-router';
import { isbot } from 'isbot';
import type { RenderToPipeableStreamOptions } from 'react-dom/server';
import { renderToPipeableStream } from 'react-dom/server';
import React from 'react';
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';
import { ServerStyleSheet } from 'styled-components';

const ABORT_DELAY = 5_000;

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext,
) {

  let isStyleExtracted = false;

  
  return new Promise((resolve, reject) => {
    const cache = createCache();
    const sheet = new ServerStyleSheet();

    let shellRendered = false;
    const userAgent = request.headers.get('user-agent');

    // Ensure requests from bots and SPA Mode renders wait for all content to load before responding
    // https://react.dev/reference/react-dom/server/renderToPipeableStream#waiting-for-all-content-to-load-for-crawlers-and-static-generation
    const readyOption: keyof RenderToPipeableStreamOptions =
      (userAgent && isbot(userAgent)) || routerContext.isSpaMode
        ? 'onAllReady'
        : 'onShellReady';

    const { pipe, abort } = renderToPipeableStream(
      <StyleProvider cache={cache}>
        <ServerRouter
          context={routerContext}
          url={request.url}
          abortDelay={ABORT_DELAY}
        />
      </StyleProvider>,
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            transform(chunk, _, callback) {
              const str: string = chunk.toString();
              const styleText = extractStyle(cache);
              const styles = sheet.getStyleTags();

              if (!isStyleExtracted) {
                if (str.includes('__ANTD_STYLE__')) {
                  const antdStyle = str.replace('__ANTD_STYLE__', styleText);
                  chunk = antdStyle.replace('__CSS_IN_JSS__', styles);
                  isStyleExtracted = true;
                }
              }

              callback(null, chunk);
            }
          });
          const stream = createReadableStreamFromReadable(body);

          responseHeaders.set('Content-Type', 'text/html');

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          // Log streaming rendering errors from inside the shell.  Don't log
          // errors encountered during initial shell rendering since they'll
          // reject and get logged in handleDocumentRequest.
          if (shellRendered) {
            console.error(error);
          }
        },
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });
}
