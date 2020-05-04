<<<<<<< HEAD
import { Button, Form, Icon, Input, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStore } from 'src/store';
import { register } from 'src/store/user/actions';
import { IAuthData, IUserState } from 'src/store/user/types';

interface IRegForm extends FormComponentProps {
    triggerForm: () => void;
    onRegister: (authData: IAuthData) => void;
    user: IUserState;
}
class RegForm extends React.Component<IRegForm> {
    public handleReg = () => {
        message.success('注册成功');
        this.props.triggerForm();
    };
    public handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.form.validateFields((err: Error, values) => {
            if (!err) {
                const { username, password } = values;
                this.props.onRegister({
                    username,
                    password,
                    callback: this.handleReg,
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
                        注册
                    </Button>
                    Or
                    <a
                        href='javascript:void(0);'
                        onClick={this.props.triggerForm}
                    >
                        &nbsp;&nbsp;已有账号!
                    </a>
                </Form.Item>
            </Form>
        );
    }
}
const mapStateToProps = (store: AppStore) => ({
    user: store.user,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onRegister: (authData: IAuthData) => dispatch(register(authData)),
});
const WrappedRegForm = Form.create<IRegForm>()(RegForm);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrappedRegForm);
=======
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
  const [form] = Form.useForm();
  const onFinish = (values: Store) => {
    const { username, password } = values;

    register({
      username,
      password,
    });
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
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connector(RegForm);
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
