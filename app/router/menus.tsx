import React, { lazy } from 'react';
import { HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';

const Home = lazy(() => import('~/pages/Home'));

const Menus: MenuType[] = [
  {
    path: '/',
    title: 'Home',
    icon: <HomeOutlined />,
    component: <Home />,
    subMenu: [
      {
        path: '/home',
        title: 'Home',
        icon: <UnorderedListOutlined />,
        component: <Home />,
      },
    ],
  },
  {
    path: '/menu1',
    title: 'Menu 1',
    icon: <HomeOutlined />,
    component: <Home />,
    subMenu: [
      {
        path: '/menu1/submenu1',
        title: 'Submenu 1',
        icon: <UnorderedListOutlined />,
        component: <Home />,
      },
    ],
  },
  {
    path: '/menu2',
    title: 'Menu 2',
    icon: <HomeOutlined />,
    component: <Home />,
  },
];

export default Menus;
