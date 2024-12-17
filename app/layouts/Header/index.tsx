import React from 'react';
import { Layout, theme } from 'antd';
import { BreadcrumbView } from '~/components/Breadcrumb';
import { HeaderRightContent } from './HeaderRightContent';
import styles from './index.module.scss';

interface HeaderProps {
  user: { [key: string]: string };
  onMenuClick: () => void;
}

const { Header: AntHeader } = Layout;
export const Header = ({ ...rest }: HeaderProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <AntHeader className={styles.header} style={{background: colorBgContainer}}>
      <BreadcrumbView />
      <HeaderRightContent {...rest} />
    </AntHeader>
  );
};
