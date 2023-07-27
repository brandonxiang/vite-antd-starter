import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getMenus } from './config';
import NotFound from '@/pages/404';
import { PageLoading } from '@/components/PageLoading';
import Home from '@/pages/Home';

const Menus = getMenus();

export const BaseRouters = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        {Menus.map((menu) => {
          const route = ({ component: Component, path, title }: any) => (
            <Route key={title} path={path} element={Component} />
          );
          return !menu.subMenu
            ? route(menu)
            : menu.subMenu.map((item) => route(item));
        })}
        <Route element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
