import { LockOutlined, UserAddOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Store } from 'antd/lib/form/interface';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { login } from '../../store/user/actions';
import { IAuthState, IUserState } from '../../store/user/types';

interface ILoginForm {
  triggerForm: () => void;
  onLogin: (authData: IAuthState) => void;
  onToTodo: () => void;
  user: IUserState;
}

const LoginForm: React.FC<ILoginForm> = ({
  onLogin,
  onToTodo,
  triggerForm,
}) => {
  const [form] = Form.useForm();
  const handleLogin = () => {
    onToTodo();
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const onFinish = (values: Store) => {
    const { username, password } = values;
    form.setFieldsValue({
      username,
      password,
    });
    onLogin({
      username,
      password,
      callback: handleLogin,
    });
  };

  return (
    <Form
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="form-body"
    >
      <h1>Todo List</h1>
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入您的用户名!' }]}
      >
        <Input
          prefix={<UserAddOutlined />}
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
        <Button type="primary" htmlType="submit" className="form-button">
          登录
        </Button>
        Or
        <a href="###" onClick={triggerForm}>
          &nbsp;&nbsp;现在注册!
        </a>
      </Form.Item>
    </Form>
  );
};
const mapStateToProps = (store: any) => ({
  user: store.user,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onLogin: (authData: IAuthState) => dispatch(login(authData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
