import actionTypes from './types';
import { takeEvery } from 'redux-saga/effects';
import { login, register } from './actions/user-sage';
import {
    fetchTodo,
    searchTodo,
    addTodo,
    deleteTodo,
    updateTodoStatus,
    updateTodoContent,
} from './actions/todo-saga';

function* rootSaga() {
    yield takeEvery(actionTypes.LOGIN, login);
    yield takeEvery(actionTypes.REGISTER, register);
    yield takeEvery(actionTypes.FETCH_TODO, fetchTodo);
    yield takeEvery(actionTypes.SEARCH_TODO, searchTodo);
    yield takeEvery(actionTypes.ADD_TODO, addTodo);
    yield takeEvery(actionTypes.DELETE_TODO, deleteTodo);
    yield takeEvery(actionTypes.UPDATE_TODO_STATUS, updateTodoStatus);
    yield takeEvery(actionTypes.UPDATE_TODO_CONTENT, updateTodoContent);
}

export default rootSaga;
