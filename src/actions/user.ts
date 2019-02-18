import actionTypes from '../types';

export function login(username: string, password: string, cb: any) {
    return {
        type: actionTypes.LOGIN,
        payload: {
            username,
            password,
            cb,
        },
    };
}

export function register(username: string, password: string, cb: any) {
    return {
        type: actionTypes.REGISTER,
        payload: {
            username,
            password,
            cb,
        },
    };
}
