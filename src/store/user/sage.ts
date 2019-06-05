import { call, put } from 'redux-saga/effects';
import { removeStorage, setStorage } from 'src/utils/store';

import UserService from '../../service/user';
import { ILoginAction, IRegisterAction, LOGIN_FAIL, LOGIN_SUC, REGISTER_FAIL, REGISTER_SUC } from './types';

const userService = new UserService();

export function* login(action: ILoginAction) {
  const { username, password } = action.payload;

  try {
    const res: IRes = yield call(userService.login, username, password);
    yield call(setStorage, 'userId', res.data.userId);
    yield call(setStorage, 'username', res.data.username);
    yield put({
      type: LOGIN_SUC,
      payload: { ...res.data, errMsg: res.msg }
    });
    action.payload.callback();
  } catch (error) {
    yield call(removeStorage, 'userId');
    yield call(removeStorage, 'username');

    yield put({
      type: LOGIN_FAIL,
      payload: { errMsg: error.message }
    });
  }
}

export function* register(action: IRegisterAction) {
  const { username, password } = action.payload;

  try {
    yield call(userService.register, username, password);
    yield put({
      type: REGISTER_SUC
    });
    action.payload.callback();
  } catch (error) {
    yield put({
      type: REGISTER_FAIL,
      payload: { errMsg: error.message }
    });
  }
}
