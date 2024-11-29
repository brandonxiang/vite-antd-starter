import { type RouteConfig, index, route, prefix } from '@react-router/dev/routes';

export default [
  index('pages/Home/index.tsx'),
  ...prefix('menu1', [
    // index('pages/Home/index.tsx'),
    route('submenu1', 'pages/menu1/index.tsx'),
  ]),
  route('menu2', 'pages/menu2/index.tsx'),
] satisfies RouteConfig;