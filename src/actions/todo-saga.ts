import { call, put } from 'redux-saga/effects';

import TodoApi from '../api/todo';
import {
  ActionTypes,
  IAddTodo,
  IDeleteTodo,
  IFetchTodo,
  ISearchTodo,
  IUpdateTodoContent,
  IUpdateTodoStatus,
} from '../types';

const todoApi = new TodoApi();

export function* fetchTodo(action: IFetchTodo) {
  const { userId } = action.payload;
  const p = async function() {
    const { data } = await todoApi.fetchTodo(userId!);
    return data;
  };
  const res = yield call(p);
  yield put({
    type: ActionTypes.FETCH_TODO_SUC,
    payload: res.data
  });
}

export function* addTodo(action: IAddTodo) {
  const { userId, content } = action.payload;
  const p = async function() {
    const { data } = await todoApi.addTodo(userId!, content!);
    return data;
  };

  const res = yield call(p);
  yield put({
    type: ActionTypes.ADD_TODO_SUC,
    payload: res.data
  });
}

export function* deleteTodo(action: IDeleteTodo) {
  const { _id } = action.payload;
  const p = async function() {
    const { data } = await todoApi.deleteTodo(_id!);
    return data;
  };

  yield call(p);
  yield put({
    type: ActionTypes.DELETE_TODO_SUC,
    payload: { _id }
  });
}

export function* searchTodo(action: ISearchTodo) {
  const { userId, q } = action.payload;
  const p = async function() {
    const { data } = await todoApi.searchTodo(userId!, q!);
    return data;
  };

  const res = yield call(p);
  yield put({
    type: ActionTypes.SEARCH_TODO_SUC,
    payload: res.data
  });
}

export function* updateTodoStatus(action: IUpdateTodoStatus) {
  const { _id } = action.payload;
  const p = async function() {
    const { data } = await todoApi.updateTodoStatus(_id!);
    return data;
  };

  yield call(p);
  yield put({
    type: ActionTypes.UPDATE_TODO_STATUS_SUC,
    payload: { _id }
  });
}

export function* updateTodoContent(action: IUpdateTodoContent) {
  const { _id, content } = action.payload;
  const p = async function() {
    const { data } = await todoApi.updateTodoContent(_id!, content!);
    return data;
  };

  yield call(p);
  yield put({
    type: ActionTypes.UPDATE_TODO_CONTENT_SUC,
    payload: { _id, content }
  });
}
