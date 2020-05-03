import {
  IAuthState,
  LOGIN,
  REGISTER,
  LOGOUT,
  KEEP_LOGIN,
  IUserState,
} from './types';

export const login = (authState: IAuthState) => ({
  type: LOGIN,
  payload: authState,
});

export const register = (authState: IAuthState) => ({
  type: REGISTER,
  payload: authState,
});

export const logout = () => ({
  type: LOGOUT,
});

export const keepLogin = (userState: IUserState) => ({
  type: KEEP_LOGIN,
  payload: userState,
});
