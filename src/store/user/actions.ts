import { IAuthData, LOGIN, LoginActionTypes, RegActionTypes, REGISTER } from './types';

export const login: (user: IAuthData) => LoginActionTypes = (user) => ({
  type: LOGIN,
  payload: user
});

export const register: (user: IAuthData) => RegActionTypes = (user) => ({
  type: REGISTER,
  payload: user
});
