import React from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Avatar } from 'antd';
import styles from './index.module.scss';

interface HeaderProps {
  onMenuClick: (param: any) => void;
  user: {
    [key: string]: string;
  };
}

export class HeaderRightContent extends React.PureComponent<HeaderProps> {
  render() {
    const { onMenuClick, user } = this.props;
    const { name, picture } = user;
    const HeaderMenu = (
      <Menu className={styles.menu} onClick={onMenuClick}>
        <Menu.Item key="logout">
          <LogoutOutlined />
          <span>logout</span>
        </Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={HeaderMenu} className={styles.right}>
        <span>
          <Avatar size="small" src={picture} alt="avatar" />
          <span className={styles.name}>{name}</span>
        </span>
      </Dropdown>
    );
  }
}
