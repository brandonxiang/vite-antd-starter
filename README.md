<p align="center">
  <a href="https://github.com/brandonxiang/vite-antd-starter">
    <img src="./public/logo.svg" width="120px" alt="Vite Antd Starter Logo" />
  </a>
</p>

<h1 align="center">Vite Antd Starter</h1>
<p align="center">Modern React SPA template with React Router Data Mode, Ant Design 6 & Vite 8</p>

<p align="center">
  <a href="https://github.com/brandonxiang/vite-antd-starter/stargazers"><img src="https://img.shields.io/github/stars/brandonxiang/vite-antd-starter" alt="Stars"></a>
  <a href="https://github.com/brandonxiang/vite-antd-starter/issues"><img src="https://img.shields.io/github/issues/brandonxiang/vite-antd-starter" alt="Issues"></a>
  <a href="https://github.com/brandonxiang/vite-antd-starter/blob/main/LICENSE"><img src="https://img.shields.io/github/license/brandonxiang/vite-antd-starter" alt="License"></a>
</p>

## ✨ Why This Template

This is the fastest way to start a modern React SPA with:
- **React Router Data Mode** for elegant data loading and state management
- **Ant Design 6** with its latest component improvements and theming system
- **Vite 8** for lightning-fast development experience
- **Full TypeScript** support for type-safe development

## 🚀 Key Technologies

| Technology | Version | Description |
|------------|---------|-------------|
| [React](https://react.dev/) | v19 | Modern React with latest features |
| [React Router](https://reactrouter.com/) | v7 | Data Router Mode for enhanced routing |
| [Ant Design](https://ant.design/) | v6 | Enterprise-class UI component library |
| [Vite](https://vitejs.dev/) | v8-beta12 | Next-generation frontend tooling |
| [TypeScript](https://www.typescriptlang.org/) | v5.9 | Type safety and better DX |

## 🎨 Ant Design 6 Highlights

Ant Design 6 brings significant improvements:

- **CSS-in-JS Refactoring**: New CSS-in-JS engine for better performance and dynamic theming
- **Enhanced Component API**: More flexible and consistent component interfaces
- **Improved Performance**: Optimized rendering and reduced bundle size
- **Better Dark Mode**: Improved dark theme support and customization
- **Updated Design System**: Refined design tokens and component styles
- **TypeScript Improvements**: Better type inference and autocompletion

```tsx
import { ConfigProvider, theme } from 'antd';

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#1890ff',
        },
      }}
    >
      <YourApp />
    </ConfigProvider>
  );
}
```

## 🧭 React Router Data Mode

This template leverages React Router 7's Data Mode for configuration-driven routing:

### Key Benefits

- **Configuration-First**: Define routes in a single configuration file
- **Data Loading**: Load data before component rendering with loaders
- **Form Actions**: Handle mutations with actions
- **Error Boundaries**: Built-in error handling per route
- **Type Safety**: Full TypeScript support for route params and data

### Configuration Example

All routes are defined in `src/router/menus.tsx`:

```tsx
export const dataRoutes: DataRouteConfig[] = [
  {
    id: 'dashboard',
    path: '/dashboard',
    title: 'Dashboard',
    icon: <DashboardOutlined />,
    Component: Dashboard,
    loader: async ({ params }) => {
      const data = await fetchDashboardData();
      return data;
    },
  },
  {
    id: 'table-list',
    path: '/table-list',
    title: 'Table List',
    icon: <TableOutlined />,
    Component: TableList,
    action: async ({ request }) => {
      const formData = await request.formData();
      await saveTableData(formData);
      return redirect('/table-list');
    },
  },
];
```

### Menu Auto-Generation

Routes are automatically converted into a menu structure:

```tsx
// Routes in menus.tsx → Auto-generated menu
{
  id: 'menu1',
  path: '/menu1',
  title: 'Menu 1',
  icon: <HomeOutlined />,
  Component: Home,
  subMenu: [
    {
      id: 'menu1-submenu1',
      path: '/menu1/submenu1',
      title: 'Submenu 1',
      icon: <UnorderedListOutlined />,
      Component: Home,
    },
  ],
}
```

## ⚡ Vite 8 Features

Vite 8 brings even faster development:

- **Instant Server Start**: No bundling during development
- **Lightning Fast HMR**: Updates appear instantly in milliseconds
- **Rollup Integration**: Optimized production builds
- **Native ESM**: Leverages modern browser capabilities
- **Plugin Ecosystem**: Extensive plugin support

```bash
# Vite 8 is configured with:
# - @vitejs/plugin-react for React support
# - vite-plugin-html for HTML template processing
# - rollup-plugin-visualizer for bundle analysis
```

## 📦 Installation

```bash
# Clone the template
npx degit brandonxiang/vite-antd-starter my-app
cd my-app

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build
```

## 🛠️ Development

```bash
pnpm run dev        # Start dev server on http://localhost:3000
pnpm run build      # Build for production
pnpm run lint       # Run linting with oxlint
pnpm run format     # Format code with oxfmt
```

## 📁 Project Structure

```
vite-antd-starter/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   ├── layouts/         # Layout components
│   ├── pages/           # Page components
│   ├── router/          # Route configurations
│   │   ├── menus.tsx    # Route definitions
│   │   └── index.tsx    # Router setup
│   ├── App.tsx          # Root component
│   └── index.tsx        # Entry point
└── package.json
```

## 🔗 Adding a New Route

1. Create your page component in `src/pages/`
2. Add route to `src/router/menus.tsx`:

```tsx
import { lazy } from 'react';
import { YourIcon } from '@ant-design/icons';

const YourPage = lazy(() => import('@/pages/YourPage'));

export const dataRoutes: DataRouteConfig[] = [
  // ... existing routes
  {
    id: 'your-page',
    path: '/your-page',
    title: 'Your Page',
    icon: <YourIcon />,
    Component: YourPage,
    // Optional: Add data loading
    loader: async ({ params }) => {
      const data = await fetchData();
      return data;
    },
    // Optional: Add form action
    action: async ({ request }) => {
      const formData = await request.formData();
      await processData(formData);
      return redirect('/your-page');
    },
  },
];
```

3. The menu will update automatically!

## 📚 Additional Resources

### Related Templates

- [vite-antd-ssr-starter](https://github.com/brandonxiang/vite-antd-ssr-starter) - SSR version with Next.js
- [vite-antd-mobile-starter](https://github.com/brandonxiang/vite-antd-mobile-starter) - Mobile-first version

### Documentation

- [React Router Data API](https://reactrouter.com/en/main/route/route#data-apis)
- [Ant Design 6 Documentation](https://ant.design/docs/spec/introduce)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React 19 Documentation](https://react.dev/learn)

## 📝 License

MIT © [brandonxiang](https://github.com/brandonxiang)

---

<p align="center">
  <sub>Built with ❤️ using React, Ant Design, and Vite</sub>
</p>
