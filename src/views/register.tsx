import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { MouseEvent } from 'react';
import { FormComponentProps } from 'antd/lib/form';
import { Form, Icon, Input, Button, message } from 'antd';
import { History, Location } from 'history';
import { UserState } from '../interface/UserState';
import { register } from '../actions/user';
require('../style/login.css');

interface IRegisterProps extends FormComponentProps {
    user: UserState;
    register: any;
    history: History;
    location: Location;
    [name: string]: any;
}

class Register extends React.Component<IRegisterProps> {
    ToLogin = () => {
        this.props.history.push('/');
    };
    handleReg = () => {
        const { user } = this.props;
        if (user.err_msg) {
            message.warning(user.err_msg);
        } else {
            message.success('注册成功');
            this.ToLogin();
        }
    };
    handleSubmit = (e: MouseEvent<HTMLElement>) => {
        this.props.user.err_msg = '';
        e.preventDefault();
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                const { username, password } = values;
                this.props.register(username, password, this.handleReg);
            }
        });
    };
    render() {
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
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        register: (username: string, password: string, cb: any) => {
            dispatch(register(username, password, cb));
        },
    };
};

const WrappedRegister = Form.create()(Register);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrappedRegister);
