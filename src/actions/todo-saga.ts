import { call, put } from 'redux-saga/effects';
import { IAction } from '../interface/Action';

import ActionTypes from '../types';
import TodoApi from '../api/todo';

const todoApi = new TodoApi();

export function* fetchTodo(action: IAction) {
    const { userId } = action.payload;
    const p = async function() {
        const { data } = await todoApi.fetchTodo(userId);
        return data;
    };
    const res = yield call(p);
    yield put({
        type: ActionTypes.FETCH_TODO_SUC,
        payload: res.data,
    });
}

export function* addTodo(action: IAction) {
    const { userId, content } = action.payload;
    const p = async function() {
        const { data } = await todoApi.addTodo(userId, content);
        return data;
    };

    const res = yield call(p);
    yield put({
        type: ActionTypes.ADD_TODO_SUC,
        payload: res.data,
    });
}

export function* deleteTodo(action: IAction) {
    const { todoId } = action.payload;
    const p = async function() {
        const { data } = await todoApi.deleteTodo(todoId);
        return data;
    };

    yield call(p);
    yield put({
        type: ActionTypes.DELETE_TODO_SUC,
        payload: { todoId },
    });
}

export function* searchTodo(action: IAction) {
    const { userId, q } = action.payload;
    const p = async function() {
        const { data } = await todoApi.searchTodo(userId, q);
        return data;
    };

    const res = yield call(p);
    yield put({
        type: ActionTypes.SEARCH_TODO_SUC,
        payload: res.data,
    });
}

export function* updateTodoStatus(action: IAction) {
    const { todoId } = action.payload;
    const p = async function() {
        const { data } = await todoApi.updateTodoStatus(todoId);
        return data;
    };

    yield call(p);
    yield put({
        type: ActionTypes.UPDATE_TODO_STATUS_SUC,
        payload: { todoId },
    });
}

export function* updateTodoContent(action: IAction) {
    const { todoId, content } = action.payload;
    const p = async function() {
        const { data } = await todoApi.updateTodoContent(todoId, content);
        return data;
    };

    yield call(p);
    yield put({
        type: ActionTypes.UPDATE_TODO_CONTENT_SUC,
        payload: { todoId, content },
    });
}
