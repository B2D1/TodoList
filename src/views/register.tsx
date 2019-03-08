import '../style/login.scss';

import { Button, Form, Icon, Input, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { History } from 'history';
import * as React from 'react';
import { MouseEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { register } from '../actions/user';
import { IUserState } from '../interface/UserState';

interface IRegisterProps extends FormComponentProps {
    user: IUserState;
    register: any;
    history: History;
    [name: string]: any;
}

class Register extends React.Component<IRegisterProps> {
    public ToLogin = () => {
        this.props.history.push('/');
    };
    public handleReg = () => {
        const { user } = this.props;
        if (user.err_msg) {
            message.warning(user.err_msg);
        } else {
            message.success('注册成功');
            this.ToLogin();
        }
    };
    public handleSubmit = (e: MouseEvent<HTMLElement>) => {
        this.props.user.err_msg = '';
        e.preventDefault();
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                const { username, password } = values;
                this.props.register(username, password, this.handleReg);
            }
        });
    };
    public render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <React.Fragment>
                <div className='bg' id='components-form-demo-normal-login'>
                    <Form onSubmit={this.handleSubmit} className='login-form'>
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
                                className='login-form-button'
                            >
                                注册
                            </Button>
                            Or{' '}
                            <a
                                href='javascript:void(0);'
                                onClick={this.ToLogin}
                            >
                                已有账号!
                            </a>
                        </Form.Item>
                    </Form>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (store: any) => {
    return { user: store.user };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        register: (username: string, password: string, cb: () => {}) => {
            dispatch(register(username, password, cb));
        },
    };
};

const WrappedRegister = Form.create()(Register);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrappedRegister);
