import { message } from 'antd';
import TodoAPI from 'api/todo';
import { IRes } from 'common/interface';
import { call, put } from 'redux-saga/effects';

import {
  ADD_TODO_SUC,
  DELETE_TODO_SUC,
  FETCH_TODO_SUC,
  SEARCH_TODO_SUC,
  UPDATE_TODO_CONTENT_SUC,
  UPDATE_TODO_STATUS_SUC,
  IAddAction,
  IDeleteAction,
  IFetchAction,
  ISearchAction,
  IUpdateContentAction,
  IUpdateStatusAction,
} from './types';

export function* fetchTodo(action: IFetchAction) {
  const { userId } = action.payload;

  try {
    const res: IRes = yield call(TodoAPI.fetchTodo, userId);

    yield put({
      type: FETCH_TODO_SUC,
      payload: res.data,
    });
  } catch {}
}

export function* addTodo(action: IAddAction) {
  const { userId, content } = action.payload;

  try {
    const res: IRes = yield call(TodoAPI.addTodo, userId, content);

    yield put({
      type: ADD_TODO_SUC,
      payload: res.data,
    });

    message.success('新增成功');
  } catch {}
}

export function* deleteTodo(action: IDeleteAction) {
  const { todoId } = action.payload;

  try {
    yield call(TodoAPI.deleteTodo, todoId);
    yield put({
      type: DELETE_TODO_SUC,
      payload: { todoId },
    });

    message.success('删除成功');
  } catch {}
}

export function* searchTodo(action: ISearchAction) {
  const { userId, query } = action.payload;

  try {
    const res: IRes = yield call(TodoAPI.searchTodo, userId, query);

    yield put({
      type: SEARCH_TODO_SUC,
      payload: res.data.todos,
    });
  } catch {}
}

export function* updateTodoStatus(action: IUpdateStatusAction) {
  const { todoId } = action.payload;

  try {
    yield call(TodoAPI.updateTodoStatus, todoId);
    yield put({
      type: UPDATE_TODO_STATUS_SUC,
      payload: { todoId },
    });
  } catch {}
}

export function* updateTodoContent(action: IUpdateContentAction) {
  const { todoId, content } = action.payload;

  try {
    yield call(TodoAPI.updateTodoContent, todoId, content);
    yield put({
      type: UPDATE_TODO_CONTENT_SUC,
      payload: { todoId, content },
    });
    message.success('编辑成功');
  } catch {}
}
