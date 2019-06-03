import { call, put } from 'redux-saga/effects';

import UserApi from '../api/user';
import { ActionTypes, ILoginAction, IRegisterAction } from '../types';

const userApi = new UserApi();

export function* login(action: ILoginAction) {
  const p = async function() {
    const { data } = await userApi.login(
      action.payload.username,
      action.payload.password
    );
    return data;
  };
  const res = yield call(p);
  if (res.error_code) {
    yield put({
      type: ActionTypes.LOGIN_FAIL,
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
      type: ActionTypes.LOGIN_SUC,
      payload: { ...res.data, errMsg: res.msg }
    });
  }
  action.payload.callback();
}

export function* register(action: IRegisterAction) {
  const p = async function() {
    const { data } = await userApi.register(
      action.payload.username,
      action.payload.password
    );
    return data;
  };
  const res = yield call(p);
  yield put({
    type: ActionTypes.REGISTER_RES,
    payload: { errMsg: res.msg }
  });
  action.payload.callback();
}
