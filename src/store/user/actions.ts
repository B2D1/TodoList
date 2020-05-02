import { IAuthState, LOGIN, REGISTER } from './types';

export const login = (authState: IAuthState) => ({
  type: LOGIN,
  payload: authState,
});

export const register = (authState: IAuthState) => ({
  type: REGISTER,
  payload: authState,
});
