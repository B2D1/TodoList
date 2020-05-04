import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Store } from 'antd/lib/form/interface';
import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { login } from '../../store/user/actions';

const mapDispatch = {
  login,
};

const connector = connect(() => ({}), mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface ILoginForm extends PropsFromRedux {}

const LoginForm: FC<ILoginForm> = ({ login }) => {
  const onFinish = (values: Store) => {
    const { username, password } = values;

    login({
      username,
      password,
    });
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入您的用户名!' }]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="用户名"
          autoComplete="off"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入您的密码!' }]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="密码" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connector(LoginForm);
