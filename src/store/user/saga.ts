import { call, put } from 'redux-saga/effects';

import UserAPI from '../../api/user';
import { IRes } from '../../common/interface';
import { LocalStorage } from '../../utils';
import {
  ILoginAction,
  IRegisterAction,
  LOGIN_SUC,
  REGISTER_SUC,
  ILogoutAction,
  LOGOUT_SUC,
} from './types';
import { message } from 'antd';

const userAPI = new UserAPI();

export function* login(action: ILoginAction) {
  const { username, password } = action.payload;

  try {
    const res: IRes = yield call(userAPI.login, username, password);
    yield call(LocalStorage.set, 'userId', res.data.userId);
    yield call(LocalStorage.set, 'username', res.data.username);
    yield put({
      type: LOGIN_SUC,
      payload: { ...res.data, errMsg: res.msg },
    });
  } catch {}
}

export function* logout(action: ILogoutAction) {
  try {
    yield call(LocalStorage.remove, 'userId');
    yield call(LocalStorage.remove, 'username');
    yield put({
      type: LOGOUT_SUC,
    });
  } catch {}
}

export function* register(action: IRegisterAction) {
  const { username, password } = action.payload;

  try {
    yield call(userAPI.register, username, password);
    yield put({
      type: REGISTER_SUC,
    });
    message.success('注册成功');
  } catch {}
}
