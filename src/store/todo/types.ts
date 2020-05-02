// Constant
export const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_TODOS_SUC = 'FETCH_TODOS_SUC';
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
export interface IFetchTodos {
  type: typeof FETCH_TODOS;
  payload: { userId: string };
}
export interface IFetchTodosSuc {
  type: typeof FETCH_TODOS_SUC;
  payload: ITodoState[];
}
export interface IAddTodo {
  type: typeof ADD_TODO;
  payload: {
    userId: string;
    content: string;
  };
}
export interface IAddTodoSuc {
  type: typeof ADD_TODO_SUC;
  payload: ITodoState;
}
export interface ISearchTodo {
  type: typeof SEARCH_TODO;
  payload: { userId: string; query: string };
}
export interface ISearchTodoSuc {
  type: typeof SEARCH_TODO_SUC;
  payload: ITodoState[];
}
export interface IDeleteTodo {
  type: typeof DELETE_TODO;
  payload: {
    todoId: string;
  };
}
export interface IDeleteTodoSuc {
  type: typeof DELETE_TODO_SUC;
  payload: {
    todoId: string;
  };
}
export interface IUpdateTodoContent {
  type: typeof UPDATE_TODO_CONTENT;
  payload: {
    todoId: string;
    content: string;
  };
}
export interface IUpdateTodoContentSuc {
  type: typeof UPDATE_TODO_CONTENT_SUC;
  payload: {
    todoId: string;
    content: string;
  };
}
export interface IUpdateTodoStatus {
  type: typeof UPDATE_TODO_STATUS;
  payload: {
    todoId: string;
  };
}
export interface IUpdateTodoStatusSuc {
  type: typeof UPDATE_TODO_STATUS_SUC;
  payload: {
    todoId: string;
  };
}

export type TodoActionTypes =
  | IFetchTodos
  | IFetchTodosSuc
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
