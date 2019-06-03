import { takeLatest } from 'redux-saga/effects';

import { addTodo, deleteTodo, fetchTodo, searchTodo, updateTodoContent, updateTodoStatus } from './actions/todo-saga';
import { login, register } from './actions/user-sage';
import { ActionTypes } from './types';

function* rootSaga() {
  yield takeLatest(ActionTypes.LOGIN, login);
  yield takeLatest(ActionTypes.REGISTER, register);
  yield takeLatest(ActionTypes.FETCH_TODO, fetchTodo);
  yield takeLatest(ActionTypes.SEARCH_TODO, searchTodo);
  yield takeLatest(ActionTypes.ADD_TODO, addTodo);
  yield takeLatest(ActionTypes.DELETE_TODO, deleteTodo);
  yield takeLatest(ActionTypes.UPDATE_TODO_STATUS, updateTodoStatus);
  yield takeLatest(ActionTypes.UPDATE_TODO_CONTENT, updateTodoContent);
}

export default rootSaga;
