import { call, put } from 'redux-saga/effects';
import TodoAPI from '../../api/todo';

import {
  ADD_TODO_SUC,
  DELETE_TODO_SUC,
  FETCH_TODOS_SUC,
  IAddTodo,
  IDeleteTodo,
  IFetchTodos,
  ISearchTodo,
  IUpdateTodoContent,
  IUpdateTodoStatus,
  SEARCH_TODO_SUC,
  UPDATE_TODO_CONTENT_SUC,
  UPDATE_TODO_STATUS_SUC,
} from './types';
import { IRes } from '../../common/interface';

const todoAPI = new TodoAPI();

export function* fetchTodos(action: IFetchTodos) {
  const { userId } = action.payload;

  const res: IRes = yield call(todoAPI.fetchTodos, userId!);
  yield put({
    type: FETCH_TODOS_SUC,
    payload: res.data,
  });
}

export function* addTodo(action: IAddTodo) {
  const { userId, content } = action.payload;

  const res: IRes = yield call(todoAPI.addTodo, userId!, content!);
  yield put({
    type: ADD_TODO_SUC,
    payload: res.data,
  });
}

export function* deleteTodo(action: IDeleteTodo) {
  const { todoId } = action.payload;

  yield call(todoAPI.deleteTodo, todoId);
  yield put({
    type: DELETE_TODO_SUC,
    payload: { todoId },
  });
}

export function* searchTodo(action: ISearchTodo) {
  const { userId, query } = action.payload;

  const res: IRes = yield call(todoAPI.searchTodo, userId, query);
  yield put({
    type: SEARCH_TODO_SUC,
    payload: res.data,
  });
}

export function* updateTodoStatus(action: IUpdateTodoStatus) {
  const { todoId } = action.payload;

  yield call(todoAPI.updateTodoStatus, todoId);
  yield put({
    type: UPDATE_TODO_STATUS_SUC,
    payload: { todoId },
  });
}

export function* updateTodoContent(action: IUpdateTodoContent) {
  const { todoId, content } = action.payload;

  yield call(todoAPI.updateTodoContent, todoId, content);
  yield put({
    type: UPDATE_TODO_CONTENT_SUC,
    payload: { todoId, content },
  });
}
