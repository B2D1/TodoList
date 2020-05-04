<<<<<<< HEAD
import { Button, Form, Icon, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { login } from 'src/store/user/actions';
import { IAuthData, IUserState } from 'src/store/user/types';

interface ILoginForm extends FormComponentProps {
    triggerForm: () => void;
    onLogin: (authData: IAuthData) => void;
    onToTodo: () => void;
    user: IUserState;
}

class LoginForm extends React.Component<ILoginForm> {
    public handleLogin = () => {
        this.props.onToTodo();
    };
    public handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.form.validateFields((err: Error, values) => {
            if (!err) {
                const { username, password } = values;
                this.props.onLogin({
                    username,
                    password,
                    callback: this.handleLogin,
                });
            }
        });
    };
    public render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className='form-body'>
                <h1>Todo List</h1>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [
                            {
                                required: true,
                                message: '请输入您的用户名!',
                            },
                        ],
                    })(
                        <Input
                            prefix={
                                <Icon
                                    type='user'
                                    style={{ color: 'rgba(0,0,0,.25)' }}
                                />
                            }
                            placeholder='用户名'
                            autoComplete='off'
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: '请输入您的密码!',
                            },
                        ],
                    })(
                        <Input
                            prefix={
                                <Icon
                                    type='lock'
                                    style={{ color: 'rgba(0,0,0,.25)' }}
                                />
                            }
                            type='password'
                            placeholder='密码'
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button
                        type='primary'
                        htmlType='submit'
                        className='form-button'
                    >
                        登录
                    </Button>
                    Or
                    <a
                        href='javascript:void(0);'
                        onClick={this.props.triggerForm}
                    >
                        &nbsp;&nbsp;现在注册!
                    </a>
                </Form.Item>
            </Form>
        );
    }
}
const mapStateToProps = (store: any) => ({
    user: store.user,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onLogin: (authData: IAuthData) => dispatch(login(authData)),
});
const WrappedLoginForm = Form.create<ILoginForm>()(LoginForm);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrappedLoginForm);
=======
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
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
