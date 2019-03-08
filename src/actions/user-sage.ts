import { call, put } from 'redux-saga/effects';
import { IAction } from '../interface/Action';

import ActionTypes from '../types';
import UserApi from '../api/user';

const userApi = new UserApi();

export function* login(action: IAction) {
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
            payload: res.msg,
        });
        const removeUserToken = async function() {
            await localStorage.removeItem('userId');
        };
        yield call(removeUserToken);
        action.payload.cb(false);
    } else {
        const setUserToken = async function() {
            await localStorage.setItem('userId', res.data.userId);
        };
        yield call(setUserToken);
        yield put({
            type: ActionTypes.LOGIN_SUC,
            payload: res.data,
        });
        action.payload.cb(true);
    }
}

export function* register(action: IAction) {
    const p = async function() {
        const { data } = await userApi.register(
            action.payload.username,
            action.payload.password
        );
        return data;
    };
    const res = yield call(p);
    if (res.error_code) {
        yield put({
            type: ActionTypes.REGISTER_FAIL,
            payload: res.msg,
        });
    }
    action.payload.cb();
}
