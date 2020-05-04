<<<<<<< HEAD
import { IUserState, LOGIN_FAIL, LOGIN_SUC, LoginActionTypes, RegActionTypes, REGISTER_FAIL, REGISTER_SUC } from './types';
=======
import {
  LOGIN_SUC,
  UserActionTypes,
  REGISTER_SUC,
  IUserState,
  KEEP_LOGIN,
  LOGOUT_SUC,
} from './types';
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb

const initialState: IUserState = {
  userId: '',
  username: '',
<<<<<<< HEAD
  errMsg: ''
=======
  errMsg: '',
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
};

export default function userReducer(
  state = initialState,
<<<<<<< HEAD
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
=======
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
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
      };
    default:
      return state;
  }
}
