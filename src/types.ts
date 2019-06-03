export enum ActionTypes {
  REGISTER = 'REGISTER',
  REGISTER_RES = 'REGISTER_RES',
  LOGIN = 'LOGIN',
  LOGIN_SUC = 'LOGIN_SUC',
  LOGIN_FAIL = 'LOGIN_FAIL',
  FETCH_TODO = 'FETCH__TODO',
  FETCH_TODO_SUC = 'FETCH_TODO_SUC',
  ADD_TODO = 'ADD_TODO',
  ADD_TODO_SUC = 'ADD_TODO_SUC',
  SEARCH_TODO = 'SEARCH_TODO',
  SEARCH_TODO_SUC = 'SEARCH_TODO_SUC',
  DELETE_TODO = 'DELETE_TODO',
  DELETE_TODO_SUC = 'DELETE_TODO_SUC',
  UPDATE_TODO_CONTENT = 'UPDATE_TODO_CONTENT',
  UPDATE_TODO_CONTENT_SUC = 'UPDATE_TODO_CONTENT_SUC',
  UPDATE_TODO_STATUS = 'UPDATE_TODO_STATUS',
  UPDATE_TODO_STATUS_SUC = 'UPDATE_TODO_STATUS_SUC'
}
export interface IAuthData {
  username: string;
  password: string;
  callback: () => void;
}
export interface IUserInfo {
  userId: string;
  username: string;
  errMsg: string;
}
export interface ILoginAction {
  type: typeof ActionTypes.LOGIN;
  payload: IAuthData;
}
export interface ILoginSucAction {
  type: typeof ActionTypes.LOGIN_SUC;
  payload: IUserInfo;
}
export interface ILoginFailAction {
  type: typeof ActionTypes.LOGIN_FAIL;
  payload: IUserInfo;
}
export interface IRegisterAction {
  type: typeof ActionTypes.REGISTER;
  payload: IAuthData;
}
export interface IRegFailAction {
  type: typeof ActionTypes.REGISTER_RES;
  payload: IUserInfo;
}
export type LoginActionTypes =
  | ILoginAction
  | ILoginSucAction
  | ILoginFailAction;
export type RegActionTypes = IRegisterAction | IRegFailAction;
