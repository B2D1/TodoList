import { call, put } from 'redux-saga/effects';
import TodoAPI from '../../api/todo';

import {
  ADD_TODO_SUC,
  DELETE_TODO_SUC,
  FETCH_TODO_SUC,
  IAddAction,
  IDeleteAction,
  IFetchAction,
  ISearchAction,
  IUpdateContentAction,
  IUpdateStatusAction,
  SEARCH_TODO_SUC,
  UPDATE_TODO_CONTENT_SUC,
  UPDATE_TODO_STATUS_SUC,
} from './types';
import { IRes } from '../../common/interface';
import { message } from 'antd';

const todoAPI = new TodoAPI();

export function* fetchTodo(action: IFetchAction) {
  const { userId } = action.payload;

  const res: IRes = yield call(todoAPI.fetchTodo, userId);
  yield put({
    type: FETCH_TODO_SUC,
    payload: res.data,
  });
}

export function* addTodo(action: IAddAction) {
  const { userId, content } = action.payload;
  
  const res: IRes = yield call(todoAPI.addTodo, userId, content);
  yield put({
    type: ADD_TODO_SUC,
    payload: res.data,
  });
  message.success('新增成功');
}

export function* deleteTodo(action: IDeleteAction) {
  const { todoId } = action.payload;
  yield call(todoAPI.deleteTodo, todoId);
  yield put({
    type: DELETE_TODO_SUC,
    payload: { todoId },
  });
  message.success('删除成功');
}

export function* searchTodo(action: ISearchAction) {
  const { userId, query } = action.payload;

  const res: IRes = yield call(todoAPI.searchTodo, userId, query);
  yield put({
    type: SEARCH_TODO_SUC,
    payload: res.data,
  });
}

export function* updateTodoStatus(action: IUpdateStatusAction) {
  const { todoId } = action.payload;

  yield call(todoAPI.updateTodoStatus, todoId);
  yield put({
    type: UPDATE_TODO_STATUS_SUC,
    payload: { todoId },
  });
}

export function* updateTodoContent(action: IUpdateContentAction) {
  const { todoId, content } = action.payload;

  yield call(todoAPI.updateTodoContent, todoId, content);
  yield put({
    type: UPDATE_TODO_CONTENT_SUC,
    payload: { todoId, content },
  });
  message.success('编辑成功');
}
