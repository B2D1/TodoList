import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from 'store';
import { login, register, setLoading } from 'store/user/actions';

const mapDispatch = {
  register,
  login,
  setLoading,
};

const mapState = ({ user }: AppState) => ({
  user,
});

interface OwnProps {
  showLogin: boolean;
}

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & OwnProps;

const UserForm: React.FC<Props> = ({
  register,
  login,
  setLoading,
  showLogin,
  user: { loading },
}) => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    setLoading(true);

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
        <Button type="primary" htmlType="submit" loading={loading}>
          {showLogin ? '登录' : '注册'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connector(UserForm);
