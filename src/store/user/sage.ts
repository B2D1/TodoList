import { call, put } from 'redux-saga/effects';

import UserService from '../../service/user';
import { ILoginAction, IRegisterAction, LOGIN_FAIL, LOGIN_SUC, REGISTER_RES } from './types';

const userService = new UserService();

export function* login(action: ILoginAction) {
  const { username, password } = action.payload;
  const res: IRes = yield call(userService.login, username, password);
  if (res.error_code) {
    yield put({
      type: LOGIN_FAIL,
      payload: { errMsg: res.msg }
    });
    const removeUserToken = async function() {
      await localStorage.removeItem('userId');
    };
    yield call(removeUserToken);
  } else {
    const setUserToken = async function() {
      await localStorage.setItem('userId', res.data.userId);
    };
    yield call(setUserToken);
    yield put({
      type: LOGIN_SUC,
      payload: { ...res.data, errMsg: res.msg }
    });
  }
  action.payload.callback();
}

export function* register(action: IRegisterAction) {
  const { username, password } = action.payload;

  const res: IRes = yield call(userService.register, username, password);
  yield put({
    type: REGISTER_RES,
    payload: { errMsg: res.msg }
  });
  action.payload.callback();
}
