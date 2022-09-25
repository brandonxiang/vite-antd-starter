import React from 'react';
import { withRouter } from 'react-router';
import { Breadcrumb } from 'antd';
import './index.scss';
import { urlToList } from '@/utils';
import { getMenus } from '@/router/config';

const findTitleByPath = (path: string) => {
  let result = {
    title: '',
    parentTitle: '',
  };
  getMenus().forEach((menu) => {
    if (menu.subMenu) {
      menu.subMenu.forEach((item) => {
        if (item.path === path) {
          result = {
            title: item.title,
            parentTitle: menu.title,
          };
        }
      });
    }
  });
  return result;
};

export const BreadcrumbView = withRouter((props) => {
  const {
    location: { pathname },
  } = props;

  let path = urlToList(pathname);
  if (path.length === 0) {
    path = ['/dashboard'];
  }
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <span>{findTitleByPath(pathname).parentTitle}</span>
      </Breadcrumb.Item>

      {path[1] && (
        <Breadcrumb.Item>
          <span>{findTitleByPath(pathname).title}</span>
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
});
