// Constant
export const FETCH_TODO = 'FETCH_TODO';
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

// State
export interface ITodoState {
  _id: string;
  content: string;
  userId: string;
  status: boolean;
}

// Action
export interface IFetchAction {
  type: typeof FETCH_TODO;
  payload: { userId: string };
}
export interface IFetchSucAction {
  type: typeof FETCH_TODO_SUC;
  payload: ITodoState[];
}
export interface IAddAction {
  type: typeof ADD_TODO;
  payload: {
    userId: string;
    content: string;
  };
}
export interface IAddSucAction {
  type: typeof ADD_TODO_SUC;
  payload: ITodoState;
}
export interface ISearchAction {
  type: typeof SEARCH_TODO;
  payload: { userId: string; query: string };
}
export interface ISearchSucAction {
  type: typeof SEARCH_TODO_SUC;
  payload: ITodoState[];
}
export interface IDeleteAction {
  type: typeof DELETE_TODO;
  payload: {
    todoId: string;
  };
}
export interface IDeleteSucAction {
  type: typeof DELETE_TODO_SUC;
  payload: {
    todoId: string;
  };
}
export interface IUpdateContentAction {
  type: typeof UPDATE_TODO_CONTENT;
  payload: {
    todoId: string;
    content: string;
  };
}
export interface IUpdateContentSucAction {
  type: typeof UPDATE_TODO_CONTENT_SUC;
  payload: {
    todoId: string;
    content: string;
  };
}
export interface IUpdateStatusAction {
  type: typeof UPDATE_TODO_STATUS;
  payload: {
    todoId: string;
  };
}
export interface IUpdateStatusSucAction {
  type: typeof UPDATE_TODO_STATUS_SUC;
  payload: {
    todoId: string;
  };
}

export type TodoActionTypes =
  | IFetchAction
  | IFetchSucAction
  | IAddAction
  | IAddSucAction
  | IUpdateContentAction
  | IUpdateContentSucAction
  | IUpdateStatusAction
  | IUpdateStatusSucAction
  | ISearchAction
  | ISearchSucAction
  | IDeleteAction
  | IDeleteSucAction;
