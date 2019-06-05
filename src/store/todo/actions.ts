import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODO,
  ITodoState,
  SEARCH_TODO,
  TodoActionTypes,
  UPDATE_TODO_CONTENT,
  UPDATE_TODO_STATUS,
} from './types';

export const addTodo: (todo: Partial<ITodoState>) => TodoActionTypes = (
  todo
) => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const fetchTodo: (todo: Partial<ITodoState>) => TodoActionTypes = (
  todo
) => {
  return {
    type: FETCH_TODO,
    payload: todo
  };
};

export const searchTodo: (
  searchParam: Partial<ITodoState & { q: string }>
) => TodoActionTypes = (params) => {
  return {
    type: SEARCH_TODO,
    payload: params
  };
};

export const deleteTodo: (todoId: Partial<ITodoState>) => TodoActionTypes = (
  todoId
) => {
  return {
    type: DELETE_TODO,
    payload: todoId
  };
};

export const updateTodoStatus: (
  todoId: Partial<ITodoState>
) => TodoActionTypes = (todoId) => {
  return {
    type: UPDATE_TODO_STATUS,
    payload: todoId
  };
};

export const updateTodoContent: (todo: ITodoState) => TodoActionTypes = (
  todo
) => {
  return {
    type: UPDATE_TODO_CONTENT,
    payload: todo
  };
};
