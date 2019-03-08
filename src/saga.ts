import { takeEvery } from 'redux-saga/effects';

import { addTodo, deleteTodo, fetchTodo, searchTodo, updateTodoContent, updateTodoStatus } from './actions/todo-saga';
import { login, register } from './actions/user-sage';
import ActionTypes from './types';

function* rootSaga() {
    yield takeEvery(ActionTypes.LOGIN, login);
    yield takeEvery(ActionTypes.REGISTER, register);
    yield takeEvery(ActionTypes.FETCH_TODO, fetchTodo);
    yield takeEvery(ActionTypes.SEARCH_TODO, searchTodo);
    yield takeEvery(ActionTypes.ADD_TODO, addTodo);
    yield takeEvery(ActionTypes.DELETE_TODO, deleteTodo);
    yield takeEvery(ActionTypes.UPDATE_TODO_STATUS, updateTodoStatus);
    yield takeEvery(ActionTypes.UPDATE_TODO_CONTENT, updateTodoContent);
}

export default rootSaga;
