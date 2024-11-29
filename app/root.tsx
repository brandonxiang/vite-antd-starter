import React from 'react';
import type { Route } from "./+types/root";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import Body from './layouts/Body';
import './App.scss';

const isBrowser = () => {
  return typeof window !== 'undefined' && window.document && window.document.createElement;
};


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        {!isBrowser() && '__ANTD_STYLE__'}
        {!isBrowser() && '__CSS_IN_JSS__'}
      </head>
      <body>
        <Body>{children}</Body>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: RouteConfig.ErrorBoundaryProps) {

  return (
    <div>
      <h1>Error</h1>
    </div>
  );
}