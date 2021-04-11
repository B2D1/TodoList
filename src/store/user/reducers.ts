import {
  IUserState,
  KEEP_LOGIN,
  LOGIN_SUC,
  LOGOUT_SUC,
  REGISTER_SUC,
  SET_LOADING,
  UserActionTypes,
} from './types';

const initialState: IUserState = {
  userId: '',
  username: '',
  errMsg: '',
  loading: false,
};

export default function userReducer(
  state = initialState,
  action: UserActionTypes
) {
  switch (action.type) {
    case REGISTER_SUC:
      return {
        ...state,
      };
    case LOGIN_SUC:
      return {
        ...state,
        ...action.payload,
      };
    case LOGOUT_SUC:
      return initialState;
    case KEEP_LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
}
