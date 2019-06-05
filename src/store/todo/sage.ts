import { call, put } from 'redux-saga/effects';

import TodoService from '../../service/todo';
import {
  ADD_TODO_SUC,
  DELETE_TODO_SUC,
  FETCH_TODO_SUC,
  IAddTodo,
  IDeleteTodo,
  IFetchTodo,
  ISearchTodo,
  IUpdateTodoContent,
  IUpdateTodoStatus,
  SEARCH_TODO_SUC,
  UPDATE_TODO_CONTENT_SUC,
  UPDATE_TODO_STATUS_SUC,
} from './types';

const todoService = new TodoService();

export function* fetchTodo(action: IFetchTodo) {
  const { userId } = action.payload;

  const res: IRes = yield call(todoService.fetchTodo, userId!);
  yield put({
    type: FETCH_TODO_SUC,
    payload: res.data
  });
}

export function* addTodo(action: IAddTodo) {
  const { userId, content } = action.payload;

  const res: IRes = yield call(todoService.addTodo, userId!, content!);
  yield put({
    type: ADD_TODO_SUC,
    payload: res.data
  });
}

export function* deleteTodo(action: IDeleteTodo) {
  const { _id } = action.payload;

  yield call(todoService.deleteTodo, _id!);
  yield put({
    type: DELETE_TODO_SUC,
    payload: { _id }
  });
}

export function* searchTodo(action: ISearchTodo) {
  const { userId, q } = action.payload;

  const res: IRes = yield call(todoService.searchTodo, userId!, q!);
  yield put({
    type: SEARCH_TODO_SUC,
    payload: res.data
  });
}

export function* updateTodoStatus(action: IUpdateTodoStatus) {
  const { _id } = action.payload;

  yield call(todoService.updateTodoStatus, _id!);
  yield put({
    type: UPDATE_TODO_STATUS_SUC,
    payload: { _id }
  });
}

export function* updateTodoContent(action: IUpdateTodoContent) {
  const { _id, content } = action.payload;

  yield call(todoService.updateTodoContent, _id!, content!);
  yield put({
    type: UPDATE_TODO_CONTENT_SUC,
    payload: { _id, content }
  });
}
