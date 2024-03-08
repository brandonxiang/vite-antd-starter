import React from 'react';
import { Layout } from 'antd';
import { BreadcrumbView } from '@/components/Breadcrumb';
import { HeaderRightContent } from './HeaderRightContent';
import styles from './index.module.scss';

interface HeaderProps {
  user: { [key: string]: string };
  onMenuClick: (param: any) => void;
}

const { Header: AntHeader } = Layout;
export const Header = ({ ...rest }: HeaderProps) => {
  return (
    <AntHeader className={styles.header}>
      <BreadcrumbView />
      <HeaderRightContent {...rest} />
    </AntHeader>
  );
};
