import { Button, Form, Icon, Input, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { History } from 'history';
import * as React from 'react';
import { MouseEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { login } from 'src/actions/user';
import { IAuthData, IUserState } from 'src/types';

interface ILoginForm extends FormComponentProps {
  triggerForm: () => void;
  onLogin: (authData: IAuthData) => void;
  history: History;
  user: IUserState;
}

class LoginForm extends React.Component<ILoginForm> {
  public toTodo = () => {
    this.props.history.push('/todo');
  };
  public handleLogin = () => {
    const {
      user: { userId, errMsg }
    } = this.props;
    if (userId) {
      this.toTodo();
    } else {
      message.warning(errMsg);
    }
  };
  public handleSubmit = (e: MouseEvent<HTMLElement>) => {
    this.props.user.errMsg = '';
    e.preventDefault();
    this.props.form.validateFields((err: Error, values) => {
      if (!err) {
        const { username, password } = values;
        this.props.onLogin({ username, password, callback: this.handleLogin });
      }
    });
  };
  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className='form-body'>
        <h1>TodoList</h1>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: '请输入您的用户名!'
              }
            ]
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
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
                message: '请输入您的密码!'
              }
            ]
          })(
            <Input
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='password'
              placeholder='密码'
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' className='form-button'>
            登录
          </Button>
          Or
          <a href='javascript:void(0);' onClick={this.props.triggerForm}>
            &nbsp;&nbsp;现在注册!
          </a>
        </Form.Item>
      </Form>
    );
  }
}
const mapStateToProps = (store: any) => ({
  user: store.user
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onLogin: (authData: IAuthData) => dispatch(login(authData))
});
const WrappedLoginForm = Form.create<ILoginForm>()(LoginForm);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedLoginForm);
