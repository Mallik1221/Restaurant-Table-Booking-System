import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Form, Input, Button, message } from 'antd';

const SignUpModal = ({ open, onClose }) => {
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/auth/signup', {
        username: values.email,
        email: values.email,
        password: values.password,
        firstName: values.name.split(' ')[0],
        lastName: values.name.split(' ')[1] || ''
      });
      
      // Store token and user info
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      message.success('Signup successful');
      onClose();
    } catch (error) {
      message.error(error.response?.data?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Sign Up"
      open={open}
      onCancel={onClose}
      footer={[
        <Button 
          key="submit" 
          type="primary" 
          form="signupForm" 
          htmlType="submit" 
          loading={loading}
        >
          Sign Up
        </Button>
      ]}
    >
      <Form 
        id="signupForm"
        layout="vertical" 
        onFinish={handleSignUp}
      >
        <Form.Item
          name="name"
          label="Full Name"
          rules={[{ required: true, message: 'Please input your full name!' }]}
        >
          <Input placeholder="Enter your full name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' }
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: 'Please input your password!' },
            { min: 6, message: 'Password must be at least 6 characters' }
          ]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SignUpModal;