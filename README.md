<p align="center">
  <a href="https://github.com/brandonxiang/vite-antd-starter">
    <img src="https://brandonxiang.top/icon/vite-template.jpeg" width="150px" alt="Vite Template Logo" />
  </a>
</p>

# Vite Antd Starter 😄

## Why do you use this template

This template is a simplest solution to start up an new SPA with modern React Router Data Mode.

## What is the key web framework for this template

- [React](https://react.dev/) - UI Library (v19)
- [React Router](https://reactrouter.com/en/main) - Data Router Mode (v7)
- [Antd](https://ant.design/index-cn) - UI Components (v5)
- [Vite](https://vitejs.dev/) - Build Tool
- [TypeScript](https://www.typescriptlang.org/) - Type Safety

## Features

✨ **Modern React Router Data Mode** - Using `createBrowserRouter` with data loading capabilities
🎨 **Ant Design 5** - Beautiful and professional UI components
⚡ **Vite** - Lightning fast HMR and build
📦 **TypeScript** - Full type safety
🎯 **Code Splitting** - Automatic lazy loading of routes
🔄 **Data Loading** - Built-in loaders and actions support
📱 **Responsive Layout** - Mobile-friendly admin layout

## Start Up

Please use [degit](https://github.com/Rich-Harris/degit) to download template

```bash
#
mkdir your-project-name
cd your-project-name
npx degit brandonxiang/vite-antd-starter

# or

npx degit brandonxiang/vite-antd-starter your-project-name
```

```shell
pnpm i
```

```shell
pnpm run dev

# http://localhost:3000/
```

```shell
# live
pnpm run build
```

## Router Configuration

This project uses React Router's **Data Mode** with `createBrowserRouter`. This provides:

- **Data Loading**: Load data before components render using loaders
- **Form Actions**: Handle mutations with actions
- **Error Boundaries**: Built-in error handling per route
- **Type Safety**: Better TypeScript integration

### Adding a New Route

Edit `src/router/menus.tsx`:

```tsx
export const dataRoutes: DataRouteConfig[] = [
  {
    id: 'my-route',
    path: '/my-route',
    title: 'My Route',
    icon: <MyIcon />,
    Component: MyComponent,
    // Optional: Add data loading
    loader: async ({ params }) => {
      const data = await fetchData();
      return data;
    },
  },
];
```

See [ROUTER_MIGRATION.md](./ROUTER_MIGRATION.md) for detailed documentation and examples.

## Relevant Links

- [vite-antd-starter](https://github.com/brandonxiang/vite-antd-starter)
- [vite-antd-ssr-starter](https://github.com/brandonxiang/vite-antd-ssr-starter)
- [vite-antd-mobile-starter](https://github.com/brandonxiang/vite-antd-mobile-starter)
- [fastify-starter](https://github.com/brandonxiang/fastify-starter)
- [ts-lib-starter](https://github.com/brandonxiang/ts-lib-starter)
- [svelteup-starter](https://github.com/brandonxiang/svelteup-starter)
- [reveal-svelte-starter](https://github.com/brandonxiang/reveal-svelte-starter)