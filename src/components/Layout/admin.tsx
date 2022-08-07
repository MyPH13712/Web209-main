import { PhoneOutlined, LaptopOutlined, TabletFilled, AudioOutlined, SettingOutlined, SearchOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components';

import LogoImage from '../../assets/images/logo.png'
import AutoComplete from '../Input/AutoComplete';

const { Header, Content, Sider } = Layout;

const item3: MenuProps['items'] = [
  { key: "cellphone", icon: <PhoneOutlined />, label: <Link to="/admin">Điện thoại</Link> },
  { key: "laptop", icon: <LaptopOutlined />, label: "Laptop" },
  { key: "tablet", icon: <TabletFilled />, label: "Máy tính bảng" },
  { key: "audio", icon: <AudioOutlined />, label: "Âm thanh" },
  {
    key: "categories", icon: <SettingOutlined />,
    label: <Link to="/admin/category">Categories</Link>
  },
]

const AdminLayout: React.FC = () => (
  <Layout>
    <HeaderCustom>
    <Link to ="/admin"><Logo src={LogoImage} /></Link>
      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
      <Text>
        Dashboard
      </Text>
      <AutoComplete/>
      <Name>
          Hello Trà My
        </Name>
    </HeaderCustom>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={item3}
        />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <ContentCustom>
          <Outlet />
        </ContentCustom>
      </Layout>
    </Layout>
  </Layout>
);

const HeaderCustom = styled(Header)`
    background-color: #00B0D7;
    height: 64px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Logo = styled.img`
    width: 64px;
    height: auto;
`
const Text = styled.div`
font-size: 18px;
  color: white;
`
const Name = styled.div`
  font-size: 18px;
  color:white;
`
const ContentCustom = styled(Content)`
  min-height: 100vh;
`

export default AdminLayout;