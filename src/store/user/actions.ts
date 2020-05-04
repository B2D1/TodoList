<<<<<<< HEAD
import { IAuthData, LOGIN, LoginActionTypes, RegActionTypes, REGISTER } from './types';

export const login: (user: IAuthData) => LoginActionTypes = (user) => ({
  type: LOGIN,
  payload: user
});

export const register: (user: IAuthData) => RegActionTypes = (user) => ({
  type: REGISTER,
  payload: user
=======
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
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
});
