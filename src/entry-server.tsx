import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import renderApp from './render-app';

import './index.scss';

export function render(url: string) {
  const { App, style } = renderApp();

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );

  return [html, style];
}
