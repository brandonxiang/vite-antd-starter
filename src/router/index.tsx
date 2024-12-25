import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { getMenus } from './config';
import NotFound from '@/pages/404';
import { PageLoading } from '@/components/PageLoading';
import Home from '@/pages/Home';
import { MenuType } from '@/@types';

const Menus = getMenus();

export const BaseRouters = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        {Menus.map((menu) => {
          const route = ({ component: Component, path, title }: MenuType) => (
            <Route key={title} path={path} element={Component} />
          );
          return !menu.subMenu
            ? route(menu)
            : menu.subMenu.map((item: any) => route(item));
        })}
        <Route element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
