// src/app/app.js
import React from 'react';
import { Layout, Menu } from 'antd';
import { 
  HomeOutlined, 
  UserOutlined, 
  BookOutlined, 
  LoginOutlined, 
  UserAddOutlined,
  CheckCircleOutlined 
} from '@ant-design/icons';
import LoginModal from '../components/LoginModal';
import SignUpModal from '../components/SignUpModal';
import BookingForm from '../components/BookingForm';

const { Header, Content, Sider } = Layout;

export default function App() {
  const [loginVisible, setLoginVisible] = React.useState(false);
  const [signUpVisible, setSignUpVisible] = React.useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<BookOutlined />}>
            Book Table
          </Menu.Item>
          <Menu.Item key="3" icon={<LoginOutlined />} onClick={() => setLoginVisible(true)}>
            Login
          </Menu.Item>
          <Menu.Item key="4" icon={<UserAddOutlined />} onClick={() => setSignUpVisible(true)}>
            Sign Up
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          Restaurant Table Booking
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
          <BookingForm />
        </Content>
      </Layout>

      <LoginModal 
        visible={loginVisible} 
        onClose={() => setLoginVisible(false)} 
      />
      <SignUpModal 
        visible={signUpVisible} 
        onClose={() => setSignUpVisible(false)} 
      />
    </Layout>
  );
}