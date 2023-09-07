import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { ContentLayout } from '@/layouts/BaseLayout';

import './index.scss';

export function render(url: string) {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <ContentLayout />
    </StaticRouter>,
  );
  return html;
}
