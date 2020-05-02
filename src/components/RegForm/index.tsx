import { Button, Form, Input, message } from 'antd';
import { UserAddOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStore } from '../../store';
import { register } from '../../store/user/actions';
import { IAuthState, IUserState } from '../../store/user/types';
import { Store } from 'antd/lib/form/interface';

interface IRegForm {
  triggerForm: () => void;
  onRegister: (authData: IAuthState) => void;
  user: IUserState;
}
const RegForm: React.FC<IRegForm> = ({ triggerForm, onRegister }) => {
  const [form] = Form.useForm();
  const handleReg = () => {
    message.success('注册成功');
    triggerForm();
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
    onRegister({
      username,
      password,
      callback: handleReg,
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
        {' '}
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
          注册
        </Button>
        Or
        <a href="###" onClick={triggerForm}>
          &nbsp;&nbsp;已有账号!
        </a>
      </Form.Item>
    </Form>
  );
};

const mapStateToProps = (store: AppStore) => ({
  user: store.user,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onRegister: (authData: IAuthState) => dispatch(register(authData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegForm);
