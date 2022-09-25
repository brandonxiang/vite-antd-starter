import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getMenus } from './config';
import { NotFound } from '@/pages/404';
import { PageLoading } from '@/components/PageLoading';

const Menus = getMenus();

export const BaseRouters = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Switch>
        <Redirect from="/" to="/home" exact />
        {Menus.map((menu) => {
          const route = ({ component: Component, path, title }: any) => (
            <Route key={title} path={path} component={Component} exact />
          );
          return !menu.subMenu
            ? route(menu)
            : menu.subMenu.map((item) => route(item));
        })}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};
