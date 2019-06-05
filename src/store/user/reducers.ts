import { IUserState, LOGIN_FAIL, LOGIN_SUC, LoginActionTypes, RegActionTypes, REGISTER_RES } from './types';

const initialState: IUserState = {
  userId: '',
  username: '',
  errMsg: ''
};

export default function userReducer(
  state = initialState,
  action: LoginActionTypes | RegActionTypes
) {
  switch (action.type) {
    case REGISTER_RES:
      return {
        ...state,
        errMsg: action.payload.errMsg
      };
    case LOGIN_SUC:
      return {
        ...state,
        userId: action.payload.userId,
        username: action.payload.username,
        errMsg: action.payload.errMsg
      };
    case LOGIN_FAIL:
      return {
        ...state,
        errMsg: action.payload.errMsg
      };
    default:
      return state;
  }
}
