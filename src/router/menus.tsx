import React, { lazy } from 'react';
import { HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';

const Home = lazy(() => import('@/pages/Home'));

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
];

export default Menus;
