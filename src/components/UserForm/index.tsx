import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { login, register } from 'store/user/actions';

const mapDispatch = {
  register,
  login,
};

interface OwnProps {
  showLogin: boolean;
}

const connector = connect(() => ({}), mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & OwnProps;

const UserForm: React.FC<Props> = ({ register, login, showLogin }) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const { username, password } = values;

    if (showLogin) {
      login({
        username,
        password,
      });
    } else {
      register({
        username,
        password,
      });
    }

    form.setFieldsValue({ username: '', password: '' });
  };

  return (
    <Form onFinish={onFinish} form={form}>
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
          {showLogin ? '登录' : '注册'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connector(UserForm);
