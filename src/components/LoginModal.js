import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Form, Input, Button, message } from 'antd';

const LoginModal = ({ open, onClose, onSignUpClick }) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/auth/login', {
        username: values.email,
        password: values.password
      });
      
      // Store token and user info
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      message.success('Login successful');
      onClose();
    } catch (error) {
      message.error(error.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Login"
      open={open}
      onCancel={onClose}
      footer={[
        <Button key="signup" onClick={onSignUpClick}>
          Sign Up
        </Button>,
        <Button 
          key="submit" 
          type="primary" 
          form="loginForm" 
          htmlType="submit" 
          loading={loading}
        >
          Login
        </Button>
      ]}
    >
      <Form 
        id="loginForm"
        layout="vertical" 
        onFinish={handleLogin}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginModal;