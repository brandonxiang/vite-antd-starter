import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ContentLayout } from '@/layouts/BaseLayout';

import './index.scss';

const rootElement = document.getElementById('root');

const root = ReactDOMClient.createRoot(rootElement!);
root.render(
  <BrowserRouter>
    <ContentLayout />
  </BrowserRouter>,
);
