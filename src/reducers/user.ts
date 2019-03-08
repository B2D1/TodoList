import { IAction } from '../interface/Action';
import { IUserState } from '../interface/UserState';
import ActionTypes from '../types';

let initialState: IUserState;
initialState = {};

export default function user(state = initialState, action: IAction) {
    switch (action.type) {
        case ActionTypes.REGISTER_FAIL:
            return {
                ...state,
                err_msg: action.payload,
            };
        case ActionTypes.LOGIN_SUC:
            return {
                ...state,
                userId: action.payload.userId,
                username: action.payload.username,
            };
        case ActionTypes.LOGIN_FAIL:
            return {
                ...state,
                err_msg: action.payload,
            };
        default:
            return state;
    }
}
