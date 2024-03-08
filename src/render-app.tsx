import React from 'react';
import { ContentLayout } from '@/layouts/BaseLayout';
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';

export default function renderApp() {
  const cache = createCache();

  const App = () => (
    <StyleProvider cache={cache}>
      <ContentLayout />
    </StyleProvider>
  );

  const styleText = extractStyle(cache, true);

  return {
    App,
    style: `<style>${styleText}</style>`,
  };
}
