import { ActionTypes, ITodoState, TodoActionTypes } from '../types';

export const addTodo: (todo: Partial<ITodoState>) => TodoActionTypes = (
  todo
) => {
  return {
    type: ActionTypes.ADD_TODO,
    payload: todo
  };
};

export const fetchTodo: (todo: Partial<ITodoState>) => TodoActionTypes = (
  todo
) => {
  return {
    type: ActionTypes.FETCH_TODO,
    payload: todo
  };
};

export const searchTodo: (
  searchParam: Partial<ITodoState & { q: string }>
) => TodoActionTypes = (params) => {
  return {
    type: ActionTypes.SEARCH_TODO,
    payload: params
  };
};

export const deleteTodo: (todoId: Partial<ITodoState>) => TodoActionTypes = (
  todoId
) => {
  return {
    type: ActionTypes.DELETE_TODO,
    payload: todoId
  };
};

export const updateTodoStatus: (
  todoId: Partial<ITodoState>
) => TodoActionTypes = (todoId) => {
  return {
    type: ActionTypes.UPDATE_TODO_STATUS,
    payload: todoId
  };
};

export const updateTodoContent: (todo: ITodoState) => TodoActionTypes = (
  todo
) => {
  return {
    type: ActionTypes.UPDATE_TODO_CONTENT,
    payload: todo
  };
};
