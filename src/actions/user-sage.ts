import { call, put } from 'redux-saga/effects';
import { Action } from '../interface/Action';

import actionTypes from '../types';
import UserApi from '../api/user';

const userApi = new UserApi();

export function* login(action: Action) {
    const p = async function() {
        const res = await userApi.login(
            action.payload.username,
            action.payload.password
        );
        return res;
    };
    const res = yield call(p);
    if (res.data.error_code) {
        yield put({
            type: actionTypes.LOGIN_FAIL,
            payload: res.data.msg,
        });
        action.payload.cb();
    } else {
        const setUserToken = async function() {
            await localStorage.setItem('user_id', res.data.data.user_id);
        };
        yield call(setUserToken);
        yield put({
            type: actionTypes.LOGIN_SUC,
            payload: res.data.data,
        });
        action.payload.cb();
    }
}

export function* register(action: Action) {
    const p = async function() {
        const res = await userApi.register(
            action.payload.username,
            action.payload.password
        );
        return res;
    };
    const res = yield call(p);
    if (res.data.error_code) {
        yield put({
            type: actionTypes.REGISTER_FAIL,
            payload: res.data.msg,
        });
    }
    action.payload.cb();
}
