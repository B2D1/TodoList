import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODO,
<<<<<<< HEAD
  ITodoState,
  SEARCH_TODO,
  TodoActionTypes,
=======
  SEARCH_TODO,
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
  UPDATE_TODO_CONTENT,
  UPDATE_TODO_STATUS,
} from './types';

<<<<<<< HEAD
export const addTodo: (todo: Partial<ITodoState>) => TodoActionTypes = (
  todo
) => ({
  type: ADD_TODO,
  payload: todo
});

export const fetchTodo: (todo: Partial<ITodoState>) => TodoActionTypes = (
  todo
) => ({
  type: FETCH_TODO,
  payload: todo
});
export const searchTodo: (
  searchParam: Partial<ITodoState & { q: string }>
) => TodoActionTypes = (params) => ({
  type: SEARCH_TODO,
  payload: params
});

export const deleteTodo: (todoId: Partial<ITodoState>) => TodoActionTypes = (
  todoId
) => ({
  type: DELETE_TODO,
  payload: todoId
});
export const updateTodoStatus: (
  todoId: Partial<ITodoState>
) => TodoActionTypes = (todoId) => ({
  type: UPDATE_TODO_STATUS,
  payload: todoId
});

export const updateTodoContent: (
  todo: Partial<ITodoState>
) => TodoActionTypes = (todo) => ({
  type: UPDATE_TODO_CONTENT,
  payload: todo
=======
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
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
});
