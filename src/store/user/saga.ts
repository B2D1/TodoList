import { message } from 'antd';
import UserAPI from 'api/user';
import { IRes } from 'common/interface';
import { call, put } from 'redux-saga/effects';
import { CLEAR_TODO } from 'store/todo/types';
import { LocalStorage } from 'utils';

import {
  ILoginAction,
  IRegisterAction,
  LOGIN_SUC,
  LOGOUT_SUC,
  REGISTER_SUC,
  SET_LOADING,
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
    yield put({
      type: SET_LOADING,
      payload: { loading: false },
    });
  } catch {
    yield put({
      type: SET_LOADING,
      payload: { loading: false },
    });
  }
}

export function* logout() {
  try {
    yield call(LocalStorage.remove, 'userId');
    yield call(LocalStorage.remove, 'username');
    yield put({
      type: LOGOUT_SUC,
    });
    yield put({
      type: CLEAR_TODO,
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
    yield put({
      type: SET_LOADING,
      payload: { loading: false },
    });

    message.success('注册成功');
  } catch {
    yield put({
      type: SET_LOADING,
      payload: { loading: false },
    });
  }
}
