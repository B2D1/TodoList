import {
  LOGIN_SUC,
  UserActionTypes,
  REGISTER_SUC,
  IUserState,
  KEEP_LOGIN,
  LOGOUT_SUC,
} from './types';

const initialState: IUserState = {
  userId: '',
  username: '',
  errMsg: '',
};

export default function userReducer(
  state = initialState,
  action: UserActionTypes
) {
  switch (action.type) {
    case REGISTER_SUC:
      return {
        ...state,
        ...action.payload,
      };
    case LOGIN_SUC:
      return {
        ...state,
        ...action.payload,
      };
    case LOGOUT_SUC:
      return {
        ...state,
        userId: '',
        username: '',
        errMsg: '',
      };
    case KEEP_LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
