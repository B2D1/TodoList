import { IUserState, LOGIN_FAIL, LOGIN_SUC, LoginActionTypes, RegActionTypes, REGISTER_FAIL, REGISTER_SUC } from './types';

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
    case REGISTER_FAIL:
      return {
        ...state,
        ...action.payload
      };
    case REGISTER_SUC:
      return {
        ...state,
        ...action.payload
      };
    case LOGIN_SUC:
      return {
        ...state,
        ...action.payload
      };
    case LOGIN_FAIL:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
