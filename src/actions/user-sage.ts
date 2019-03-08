import { call, put } from 'redux-saga/effects';
import { IAction } from '../interface/Action';

import ActionTypes from '../types';
import UserApi from '../api/user';

const userApi = new UserApi();

export function* login(action: IAction) {
    const p = async function() {
        const res = await userApi.login(
            action.payload.username,
            action.payload.password
        );
        return res;
    };
    const data = yield call(p);
    if (data.data.error_code) {
        yield put({
            type: ActionTypes.LOGIN_FAIL,
            payload: data.data.msg,
        });
        action.payload.cb();
    } else {
        const setUserToken = async function() {
            await localStorage.setItem('userId', data.data.data.userId);
        };
        yield call(setUserToken);
        yield put({
            type: ActionTypes.LOGIN_SUC,
            payload: data.data.data,
        });
        action.payload.cb();
    }
}

export function* register(action: IAction) {
    const p = async function() {
        const res = await userApi.register(
            action.payload.username,
            action.payload.password
        );
        return res;
    };
    const data = yield call(p);
    if (data.data.error_code) {
        yield put({
            type: ActionTypes.REGISTER_FAIL,
            payload: data.data.msg,
        });
    }
    action.payload.cb();
}
