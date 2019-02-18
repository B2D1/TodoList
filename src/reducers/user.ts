import actionTypes from '../types';
import { UserState } from '../interface/UserState';

let initialState: UserState;
initialState = {};

export default function user(state = initialState, action: any) {
    switch (action.type) {
        case actionTypes.REGISTER_FAIL:
            return {
                ...state,
                err_msg: action.payload,
            };
        case actionTypes.LOGIN_SUC:
            return {
                ...state,
                user_id: action.payload.user_id,
                username: action.payload.username,
            };
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                err_msg: action.payload,
            };
        default:
            return state;
    }
}
