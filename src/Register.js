import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { UnlockOutlined } from '@ant-design/icons';
const Register = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
    <h1 style={{ marginBottom: '20px' ,background: 'linear-gradient(to right, #8e2de2, #4a00e0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>注册</h1>
    <Form
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        labelAlign="left"
        style={{ width: 300 }}
    >
        <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
            label=""
        >
            <Input prefix={<UserOutlined />} placeholder="请输入用户名" />
        </Form.Item>

        <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            label=""
        >
            <Input.Password prefix={<UnlockOutlined />} placeholder="请输入密码" />
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                注册
            </Button>
        </Form.Item>
    </Form>
</div>

  );
};

export default Register;
