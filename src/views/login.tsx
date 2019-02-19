import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { MouseEvent } from 'react';
import { FormComponentProps } from 'antd/lib/form';
import { Form, Icon, Input, Button, message } from 'antd';
import { History, Location } from 'history';
import { UserState } from '../interface/UserState';
import { login } from '../actions/user';
import '../style/login.less';

interface ILoginProps extends FormComponentProps {
    login: any;
    todo: any;
    user: UserState;
    history: History;
    location: Location;
    [name: string]: any;
}

class Login extends React.Component<ILoginProps> {
    componentDidMount() {}
    OnRegister = () => {
        this.props.history.push('/register');
    };
    ToTodo = () => {
        this.props.history.push('/todo');
    };
    handleSubmit = (e: MouseEvent<HTMLElement>) => {
        this.props.user.err_msg = '';
        e.preventDefault();
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                const { username, password } = values;
                this.props.login(username, password, this.handleLogin);
            }
        });
    };
    handleLogin = () => {
        const { user } = this.props;
        if (user.err_msg) {
            message.warning(user.err_msg);
        }
        if (user.user_id) {
            this.ToTodo();
        }
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
                                登录
                            </Button>
                            Or{' '}
                            <a
                                href='javascript:void(0);'
                                onClick={this.OnRegister}
                            >
                                现在注册!
                            </a>
                        </Form.Item>
                    </Form>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (store: any) => {
    return { todo: store.todo, user: store.user };
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        login: (username: string, password: string, cb: any) => {
            dispatch(login(username, password, cb));
        },
    };
};

let WrappedLogin = Form.create()(Login);

WrappedLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(WrappedLogin);

export default WrappedLogin;
