import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import renderApp from './render-app';

const rootElement = document.getElementById('root');

const { App } = renderApp();

ReactDOMClient.hydrateRoot(
  rootElement!,
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
