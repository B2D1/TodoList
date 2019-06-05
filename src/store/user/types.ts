export const REGISTER = 'REGISTER';
export const REGISTER_SUC = 'REGISTER_SUC';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGIN = 'LOGIN';
export const LOGIN_SUC = 'LOGIN_SUC';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

export interface IAuthData {
  username: string;
  password: string;
  callback: () => void;
}
export interface IUserState {
  userId: string;
  username: string;
  errMsg: string;
}
export interface ILoginAction {
  type: typeof LOGIN;
  payload: IAuthData;
}
export interface ILoginSucAction {
  type: typeof LOGIN_SUC;
  payload: IUserState;
}
export interface ILoginFailAction {
  type: typeof LOGIN_FAIL;
  payload: IUserState;
}
export interface IRegisterAction {
  type: typeof REGISTER;
  payload: IAuthData;
}
export interface IRegFailAction {
  type: typeof REGISTER_FAIL;
  payload: IUserState;
}
export interface IRegSucAction {
  type: typeof REGISTER_SUC;
  payload: IUserState;
}

export type LoginActionTypes =
  | ILoginAction
  | ILoginSucAction
  | ILoginFailAction;
export type RegActionTypes = IRegisterAction | IRegFailAction | IRegSucAction;
