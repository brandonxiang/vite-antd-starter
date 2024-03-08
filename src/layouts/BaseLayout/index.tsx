import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import { Header } from '../Header';
import { BaseMenu } from '../Menu';
import { BaseRouters } from '@/router';
import { getMenus } from '@/router/config';
import { APP_ENV } from '@/utils';
import styles from './index.module.scss';

interface BaseLayoutProps {}

interface BaseLayoutState {}

const { Sider, Content } = Layout;
const menus = getMenus();

class PageLayout extends PureComponent<BaseLayoutProps, BaseLayoutState> {
  onMenuClick = ({ key }: any) => {
    if (key === 'logout') {
      // logout
    }
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }} hasSider>
        <Sider
          collapsible={false}
          style={{
            overflow: 'auto',
            height: '100vh',
          }}
          width="280"
        >
          <div className={styles.logo}>
            <div className={styles.text}>
              <span style={{ fontSize: '28px' }}>Admin</span>
              <span
                style={{
                  fontSize: '28px',
                  color: APP_ENV === 'live' ? 'red' : 'white',
                }}
              >
                {APP_ENV?.toUpperCase()}
              </span>
            </div>
          </div>
          <BaseMenu menu={menus} theme="dark" mode="inline" />
        </Sider>
        <Layout>
          <Header
            user={{ name: 'admin user' }}
            onMenuClick={this.onMenuClick}
          />
          <Content className={styles.content}>
            <BaseRouters />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export const ContentLayout = PageLayout;
