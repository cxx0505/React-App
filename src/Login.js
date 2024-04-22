import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { UnlockOutlined } from '@ant-design/icons';
import './Login.css';
const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // 在这里可以处理表单提交的逻辑，比如发送请求到后端
  };


  return (
    <div style={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1 style={{ marginBottom: '20px' ,background: 'linear-gradient(to right, #8e2de2, #4a00e0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>登录</h1>
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
          <Space>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
              <Button type="primary" htmlType="submit" >
              <Link to="/register" style={{ color: 'white' }}>
                注册
              </Link>
              </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
