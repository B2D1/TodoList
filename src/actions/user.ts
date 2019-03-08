import ActionTypes from '../types';

export function login(username: string, password: string, cb: any) {
    return {
        type: ActionTypes.LOGIN,
        payload: {
            username,
            password,
            cb,
        },
    };
}

export function register(username: string, password: string, cb: any) {
    return {
        type: ActionTypes.REGISTER,
        payload: {
            username,
            password,
            cb,
        },
    };
}
