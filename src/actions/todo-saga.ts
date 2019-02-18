import { call, put } from 'redux-saga/effects';
import { Action } from '../interface/Action';

import actionTypes from '../types';
import TodoApi from '../api/todo';

const todoApi = new TodoApi();

export function* fetchTodo(action: Action) {
    const { user_id } = action.payload;
    const p = async function() {
        const res = await todoApi.fetchTodo(user_id);
        return res;
    };
    const res = yield call(p);
    yield put({
        type: actionTypes.FETCH_TODO_SUC,
        payload: res.data.data,
    });
}

export function* addTodo(action: Action) {
    const { user_id, content } = action.payload;
    const p = async function() {
        const res = await todoApi.addTodo(user_id, content);
        return res;
    };

    const res = yield call(p);
    yield put({
        type: actionTypes.ADD_TODO_SUC,
        payload: res.data.data,
    });
}

export function* deleteTodo(action: Action) {
    const { todo_id } = action.payload;
    const p = async function() {
        const res = await todoApi.deleteTodo(todo_id);
        return res;
    };

    const res = yield call(p);
    yield put({
        type: actionTypes.DELETE_TODO_SUC,
        payload: todo_id,
    });
}

export function* searchTodo(action: Action) {
    const { user_id, q } = action.payload;
    const p = async function() {
        const res = await todoApi.searchTodo(user_id, q);
        return res;
    };

    const res = yield call(p);
    yield put({
        type: actionTypes.SEARCH_TODO_SUC,
        payload: res.data.data,
    });
}

export function* updateTodoStatus(action: Action) {
    const { todo_id } = action.payload;
    const p = async function() {
        const res = await todoApi.updateTodoStatus(todo_id);
        return res;
    };

    const res = yield call(p);
    yield put({
        type: actionTypes.UPDATE_TODO_STATUS_SUC,
        payload: action.payload,
    });
}

export function* updateTodoContent(action: Action) {
    const { todo_id, content } = action.payload;
    const p = async function() {
        const res = await todoApi.updateTodoContent(todo_id, content);
        return res;
    };

    const res = yield call(p);
    yield put({
        type: actionTypes.UPDATE_TODO_CONTENT_SUC,
        payload: action.payload,
    });
}
