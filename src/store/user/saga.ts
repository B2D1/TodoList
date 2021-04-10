import { message } from 'antd';
import UserAPI from 'api/user';
import { IRes } from 'common/interface';
import { call, put } from 'redux-saga/effects';
import { LocalStorage } from 'utils';

import {
  ILoginAction,
  IRegisterAction,
  LOGIN_SUC,
  LOGOUT_SUC,
  REGISTER_SUC,
} from './types';

export function* login(action: ILoginAction) {
  const { username, password } = action.payload;

  try {
    const res: IRes = yield call(UserAPI.login, username, password);

    yield call(LocalStorage.set, 'userId', res.data.userId);
    yield call(LocalStorage.set, 'username', res.data.username);
    yield put({
      type: LOGIN_SUC,
      payload: { ...res.data, errMsg: res.msg },
    });
  } catch {}
}

export function* logout() {
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
    yield call(UserAPI.register, username, password);
    yield put({
      type: REGISTER_SUC,
    });

    message.success('注册成功');
  } catch {}
}
