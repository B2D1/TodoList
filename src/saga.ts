import { takeEvery } from 'redux-saga/effects';

import {
  addTodo,
  deleteTodo,
  fetchTodos,
  searchTodo,
  updateTodoContent,
  updateTodoStatus,
} from './store/todo/saga';
import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODOS,
  SEARCH_TODO,
  UPDATE_TODO_CONTENT,
  UPDATE_TODO_STATUS,
} from './store/todo/types';
import { login, register } from './store/user/saga';
import { LOGIN, REGISTER } from './store/user/types';

function* rootSaga() {
  yield takeEvery(LOGIN, login);
  yield takeEvery(REGISTER, register);
  yield takeEvery(FETCH_TODOS, fetchTodos);
  yield takeEvery(SEARCH_TODO, searchTodo);
  yield takeEvery(ADD_TODO, addTodo);
  yield takeEvery(DELETE_TODO, deleteTodo);
  yield takeEvery(UPDATE_TODO_STATUS, updateTodoStatus);
  yield takeEvery(UPDATE_TODO_CONTENT, updateTodoContent);
}

export default rootSaga;
