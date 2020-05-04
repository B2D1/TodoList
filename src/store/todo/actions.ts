import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODO,
  SEARCH_TODO,
  UPDATE_TODO_CONTENT,
  UPDATE_TODO_STATUS,
} from './types';

export const addTodo = (userId: string, content: string) => ({
  type: ADD_TODO,
  payload: { userId, content },
});

export const fetchTodo = (userId: string) => ({
  type: FETCH_TODO,
  payload: { userId },
});
export const searchTodo = (userId: string, query: string) => ({
  type: SEARCH_TODO,
  payload: { userId, query },
});

export const deleteTodo = (todoId: string) => ({
  type: DELETE_TODO,
  payload: { todoId },
});
export const updateTodoStatus = (todoId: string) => ({
  type: UPDATE_TODO_STATUS,
  payload: { todoId },
});

export const updateTodoContent = (todoId: string, content: string) => ({
  type: UPDATE_TODO_CONTENT,
  payload: { todoId, content },
});
