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
export interface IFetchTodo {
  type: typeof ActionTypes.FETCH_TODO;
  payload: ITodoState;
}
export interface IFetchTodoSuc {
  type: typeof ActionTypes.FETCH_TODO_SUC;
  payload: ITodoState[];
}
export interface IAddTodo {
  type: typeof ActionTypes.ADD_TODO;
  payload: ITodoState;
}
export interface IAddTodoSuc {
  type: typeof ActionTypes.ADD_TODO_SUC;
  payload: ITodoState;
}
export interface ISearchTodo {
  type: typeof ActionTypes.SEARCH_TODO;
  payload: Partial<ITodoState & { q: string }>;
}
export interface ISearchTodoSuc {
  type: typeof ActionTypes.SEARCH_TODO_SUC;
  payload: ITodoState[];
}
export interface IDeleteTodo {
  type: typeof ActionTypes.DELETE_TODO;
  payload: Partial<ITodoState>;
}
export interface IDeleteTodoSuc {
  type: typeof ActionTypes.DELETE_TODO_SUC;
  payload: Partial<ITodoState>;
}
export interface IUpdateTodoContent {
  type: typeof ActionTypes.UPDATE_TODO_CONTENT;
  payload: Partial<ITodoState>;
}
export interface IUpdateTodoContentSuc {
  type: typeof ActionTypes.UPDATE_TODO_CONTENT_SUC;
  payload: Partial<ITodoState>;
}
export interface IUpdateTodoStatus {
  type: typeof ActionTypes.UPDATE_TODO_STATUS;
  payload: Partial<ITodoState>;
}
export interface IUpdateTodoStatusSuc {
  type: typeof ActionTypes.UPDATE_TODO_STATUS_SUC;
  payload: Partial<ITodoState>;
}

export interface ITodoState {
  _id?: string;
  content?: string;
  userId?: string;
  status?: boolean;
}
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
  type: typeof ActionTypes.LOGIN;
  payload: IAuthData;
}
export interface ILoginSucAction {
  type: typeof ActionTypes.LOGIN_SUC;
  payload: IUserState;
}
export interface ILoginFailAction {
  type: typeof ActionTypes.LOGIN_FAIL;
  payload: IUserState;
}
export interface IRegisterAction {
  type: typeof ActionTypes.REGISTER;
  payload: IAuthData;
}
export interface IRegFailAction {
  type: typeof ActionTypes.REGISTER_RES;
  payload: IUserState;
}
export type LoginActionTypes =
  | ILoginAction
  | ILoginSucAction
  | ILoginFailAction;
export type RegActionTypes = IRegisterAction | IRegFailAction;
export type TodoActionTypes =
  | IFetchTodo
  | IFetchTodoSuc
  | IAddTodo
  | IAddTodoSuc
  | IUpdateTodoContent
  | IUpdateTodoContentSuc
  | IUpdateTodoStatus
  | IUpdateTodoStatusSuc
  | ISearchTodo
  | ISearchTodoSuc
  | IDeleteTodo
  | IDeleteTodoSuc;
