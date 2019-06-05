export const FETCH_TODO = 'FETCH__TODO';
export const FETCH_TODO_SUC = 'FETCH_TODO_SUC';
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUC = 'ADD_TODO_SUC';
export const SEARCH_TODO = 'SEARCH_TODO';
export const SEARCH_TODO_SUC = 'SEARCH_TODO_SUC';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO_SUC = 'DELETE_TODO_SUC';
export const UPDATE_TODO_CONTENT = 'UPDATE_TODO_CONTENT';
export const UPDATE_TODO_CONTENT_SUC = 'UPDATE_TODO_CONTENT_SUC';
export const UPDATE_TODO_STATUS = 'UPDATE_TODO_STATUS';
export const UPDATE_TODO_STATUS_SUC = 'UPDATE_TODO_STATUS_SUC';

export interface IFetchTodo {
  type: typeof FETCH_TODO;
  payload: Partial<ITodoState>;
}
export interface IFetchTodoSuc {
  type: typeof FETCH_TODO_SUC;
  payload: ITodoState[];
}
export interface IAddTodo {
  type: typeof ADD_TODO;
  payload: Partial<ITodoState>;
}
export interface IAddTodoSuc {
  type: typeof ADD_TODO_SUC;
  payload: ITodoState;
}
export interface ISearchTodo {
  type: typeof SEARCH_TODO;
  payload: Partial<ITodoState & { q: string }>;
}
export interface ISearchTodoSuc {
  type: typeof SEARCH_TODO_SUC;
  payload: ITodoState[];
}
export interface IDeleteTodo {
  type: typeof DELETE_TODO;
  payload: Partial<ITodoState>;
}
export interface IDeleteTodoSuc {
  type: typeof DELETE_TODO_SUC;
  payload: Partial<ITodoState>;
}
export interface IUpdateTodoContent {
  type: typeof UPDATE_TODO_CONTENT;
  payload: Partial<ITodoState>;
}
export interface IUpdateTodoContentSuc {
  type: typeof UPDATE_TODO_CONTENT_SUC;
  payload: Partial<ITodoState>;
}
export interface IUpdateTodoStatus {
  type: typeof UPDATE_TODO_STATUS;
  payload: Partial<ITodoState>;
}
export interface IUpdateTodoStatusSuc {
  type: typeof UPDATE_TODO_STATUS_SUC;
  payload: Partial<ITodoState>;
}

export interface ITodoState {
  _id: string;
  content: string;
  userId: string;
  status: boolean;
}
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
