import { ActionTypes, IUserInfo, LoginActionTypes, RegActionTypes } from '../types';

const initialState: IUserInfo = {
  userId: '',
  username: '',
  errMsg: ''
};

export default function userReducer(
  state = initialState,
  action: LoginActionTypes | RegActionTypes
) {
  switch (action.type) {
    case ActionTypes.REGISTER_RES:
      return {
        ...state,
        errMsg: action.payload.errMsg
      };
    case ActionTypes.LOGIN_SUC:
      return {
        ...state,
        userId: action.payload.userId,
        username: action.payload.username,
        errMsg: action.payload.errMsg
      };
    case ActionTypes.LOGIN_FAIL:
      return {
        ...state,
        errMsg: action.payload.errMsg
      };
    default:
      return state;
  }
}
