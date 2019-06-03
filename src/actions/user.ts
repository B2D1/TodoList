import { ActionTypes, IAuthData, LoginActionTypes, RegActionTypes } from '../types';

export const login: (user: IAuthData) => LoginActionTypes = (user) => {
  return {
    type: ActionTypes.LOGIN,
    payload: user
  };
};

export function register(user: IAuthData): RegActionTypes {
  return {
    type: ActionTypes.REGISTER,
    payload: user
  };
}
