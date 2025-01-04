import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, DatePicker, TimePicker, InputNumber, Button, message } from 'antd';
import api from '../utils/api';

const BookingForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await api.post('/bookings/create', {
        ...values,
        date: values.date.toISOString(),
        time: values.time.format('HH:mm')
      });
      message.success('Booking successful!');
      form.resetFields();
    } catch (error) {
      message.error(error.response?.data?.message || 'Booking failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form 
      form={form}
      layout="vertical" 
      onFinish={onFinish}
      style={{ maxWidth: 600, margin: 'auto' }}
    >
      <Form.Item 
        name="name" 
        label="Full Name" 
        rules={[{ required: true, message: 'Please enter your name' }]}
      >
        <Input placeholder="Enter your full name" />
      </Form.Item>

      <Form.Item 
        name="email" 
        label="Email" 
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' }
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>

      <Form.Item 
        name="contactNumber" 
        label="Contact Number" 
        rules={[
          { required: true, message: 'Please enter your contact number' },
          { pattern: /^[0-9]{10}$/, message: 'Please enter a valid 10-digit phone number' }
        ]}
      >
        <Input placeholder="Enter 10-digit phone number" />
      </Form.Item>

      <Form.Item 
        name="date" 
        label="Reservation Date" 
        rules={[{ required: true, message: 'Please select a date' }]}
      >
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item 
        name="time" 
        label="Reservation Time" 
        rules={[{ required: true, message: 'Please select a time' }]}
      >
        <TimePicker style={{ width: '100%' }} format="HH:mm" />
      </Form.Item>

      <Form.Item 
        name="guests" 
        label="Number of Guests" 
        rules={[{ required: true, message: 'Please enter number of guests' }]}
      >
        <InputNumber min={1} max={10} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item>
        <Button 
          type="primary" 
          htmlType="submit" 
          loading={loading}
          style={{ width: '100%' }}
        >
          Book Table
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BookingForm;