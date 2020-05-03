import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { Store } from 'antd/lib/form/interface';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { register } from '../../store/user/actions';

const mapDispatch = {
  register,
};

const connector = connect(() => ({}), mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface IRegForm extends PropsFromRedux {}

const RegForm: React.FC<IRegForm> = ({ register }) => {

  const onReg = () => {
    message.success('注册成功');
  };

  const onFinish = (values: Store) => {
    const { username, password } = values;

    register({
      username,
      password,
      callback: onReg,
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
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connector(RegForm);
