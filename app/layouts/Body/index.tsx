import React from 'react';
import { Layout } from 'antd';
import { Header } from '../Header';
// import { BaseRouters } from '~/router';
import { APP_ENV } from '~/utils';
import styles from './index.module.scss';
import { BaseMenu } from '../Menu';
import { getMenus } from '~/router/config';
const { Sider, Content } = Layout;
const menus = getMenus();

export default function Body({ children }: { children: React.ReactNode }) {

  function onMenuClick({ key }: any) {
    if (key === 'logout') {
      // logout
    }
  }

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
            onMenuClick={onMenuClick}
          />
          <Content className={styles.content}>
            {children}
          </Content>
        </Layout>
      </Layout>
  );
}