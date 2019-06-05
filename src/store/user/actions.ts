import { IAuthData, LOGIN, LoginActionTypes, RegActionTypes, REGISTER } from './types';

export const login: (user: IAuthData) => LoginActionTypes = (user) => {
  return {
    type: LOGIN,
    payload: user
  };
};

export function register(user: IAuthData): RegActionTypes {
  return {
    type: REGISTER,
    payload: user
  };
}
