import { lazy } from 'react';
import { HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { MenuType, DataRouteConfig } from '@/@types';

const Home = lazy(() => import('@/pages/Home'));

// Route configurations using React Router's data API
export const dataRoutes: DataRouteConfig[] = [
  {
    id: 'home',
    path: '/',
    title: 'Home',
    icon: <HomeOutlined />,
    Component: Home,
    // You can add loader here for data fetching
    // loader: async ({ request, params }) => {
    //   return { data: 'some data' };
    // },
  },
  {
    id: 'menu1',
    path: '/menu1',
    title: 'Menu 1',
    icon: <HomeOutlined />,
    Component: Home,
  },
  {
    id: 'menu1-submenu1',
    path: '/menu1/submenu1',
    title: 'Submenu 1',
    icon: <UnorderedListOutlined />,
    Component: Home,
  },
  {
    id: 'menu2',
    path: '/menu2',
    title: 'Menu 2',
    icon: <HomeOutlined />,
    Component: Home,
  },
];

// Helper function to extract menu structure from data routes for Menu component
export const extractMenuStructure = (routes: DataRouteConfig[]): MenuType[] => {
  const menuMap = new Map<string, MenuType>();
  
  routes.forEach(route => {
    // Skip routes without titles (they won't be displayed in menu)
    if (!route.title) return;
    
    const pathParts = route.path?.split('/').filter(Boolean) || [];
    
    if (pathParts.length === 0) {
      // Root level route
      menuMap.set(route.path!, {
        path: route.path!,
        title: route.title,
        icon: route.icon,
        component: route.Component,
        noMenu: route.noMenu,
        hasPermission: route.hasPermission,
        redirect: route.redirect,
      });
    } else if (pathParts.length === 1) {
      // First level route
      const existing = menuMap.get(`/${pathParts[0]}`);
      if (!existing) {
        menuMap.set(`/${pathParts[0]}`, {
          path: `/${pathParts[0]}`,
          title: route.title,
          icon: route.icon,
          component: route.Component,
          noMenu: route.noMenu,
          hasPermission: route.hasPermission,
          redirect: route.redirect,
        });
      }
    } else if (pathParts.length === 2) {
      // Second level route (submenu)
      const parentPath = `/${pathParts[0]}`;
      const parent = menuMap.get(parentPath);
      
      if (parent) {
        if (!parent.subMenu) {
          parent.subMenu = [];
        }
        parent.subMenu.push({
          path: route.path!,
          title: route.title,
          icon: route.icon,
          component: route.Component,
          noMenu: route.noMenu,
          hasPermission: route.hasPermission,
          redirect: route.redirect,
        });
      } else {
        // Create parent if it doesn't exist
        menuMap.set(parentPath, {
          path: parentPath,
          title: pathParts[0],
          icon: <HomeOutlined />,
          subMenu: [
            {
              path: route.path!,
              title: route.title,
              icon: route.icon,
              component: route.Component,
              noMenu: route.noMenu,
              hasPermission: route.hasPermission,
              redirect: route.redirect,
            },
          ],
        });
      }
    }
  });
  
  return Array.from(menuMap.values());
};
