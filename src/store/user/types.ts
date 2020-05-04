<<<<<<< HEAD
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
=======
// Constant
export const REGISTER = 'REGISTER';
export const REGISTER_SUC = 'REGISTER_SUC';
export const LOGIN = 'LOGIN';
export const LOGIN_SUC = 'LOGIN_SUC';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUC = 'LOGOUT_SUC';
export const KEEP_LOGIN = 'KEEP_LOGIN';

// State
export interface IAuthState {
  username: string;
  password: string;
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
}
export interface IUserState {
  userId: string;
  username: string;
  errMsg: string;
}
<<<<<<< HEAD
export interface ILoginAction {
  type: typeof LOGIN;
  payload: IAuthData;
=======

// Action
export interface ILoginAction {
  type: typeof LOGIN;
  payload: IAuthState;
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
}
export interface ILoginSucAction {
  type: typeof LOGIN_SUC;
  payload: IUserState;
}
<<<<<<< HEAD
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
=======
export interface ILogoutAction {
  type: typeof LOGOUT;
}
export interface ILogoutSucAction {
  type: typeof LOGOUT_SUC;
}
export interface IRegisterAction {
  type: typeof REGISTER;
  payload: IAuthState;
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
}
export interface IRegSucAction {
  type: typeof REGISTER_SUC;
  payload: IUserState;
}
<<<<<<< HEAD

export type LoginActionTypes =
  | ILoginAction
  | ILoginSucAction
  | ILoginFailAction;
export type RegActionTypes = IRegisterAction | IRegFailAction | IRegSucAction;
=======
export interface IKeepLogin {
  type: typeof KEEP_LOGIN;
  payload: IUserState;
}

export type UserActionTypes =
  | ILoginAction
  | ILoginSucAction
  | ILogoutAction
  | ILogoutSucAction
  | IKeepLogin
  | IRegisterAction
  | IRegSucAction;
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
