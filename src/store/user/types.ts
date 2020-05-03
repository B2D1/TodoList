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
}
export interface IUserState {
  userId: string;
  username: string;
  errMsg: string;
}

// Action
export interface ILoginAction {
  type: typeof LOGIN;
  payload: IAuthState;
}
export interface ILoginSucAction {
  type: typeof LOGIN_SUC;
  payload: IUserState;
}
export interface ILogoutAction {
  type: typeof LOGOUT;
}
export interface ILogoutSucAction {
  type: typeof LOGOUT_SUC;
}
export interface IRegisterAction {
  type: typeof REGISTER;
  payload: IAuthState;
}
export interface IRegSucAction {
  type: typeof REGISTER_SUC;
  payload: IUserState;
}
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
