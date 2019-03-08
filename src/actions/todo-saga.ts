import { call, put } from 'redux-saga/effects';
import { IAction } from '../interface/Action';

import ActionTypes from '../types';
import TodoApi from '../api/todo';

const todoApi = new TodoApi();

export function* fetchTodo(action: IAction) {
    const { userId } = action.payload;
    const p = async function() {
        const res = await todoApi.fetchTodo(userId);
        return res;
    };
    const data = yield call(p);
    yield put({
        type: ActionTypes.FETCH_TODO_SUC,
        payload: data.data.data,
    });
}

export function* addTodo(action: IAction) {
    const { userId, content } = action.payload;
    const p = async function() {
        const res = await todoApi.addTodo(userId, content);
        return res;
    };

    const data = yield call(p);
    yield put({
        type: ActionTypes.ADD_TODO_SUC,
        payload: data.data.data,
    });
}

export function* deleteTodo(action: IAction) {
    const { todoId } = action.payload;
    const p = async function() {
        const res = await todoApi.deleteTodo(todoId);
        return res;
    };

    yield call(p);
    yield put({
        type: ActionTypes.DELETE_TODO_SUC,
        payload: todoId,
    });
}

export function* searchTodo(action: IAction) {
    const { userId, q } = action.payload;
    const p = async function() {
        const res = await todoApi.searchTodo(userId, q);
        return res;
    };

    const data = yield call(p);
    yield put({
        type: ActionTypes.SEARCH_TODO_SUC,
        payload: data.data.data,
    });
}

export function* updateTodoStatus(action: IAction) {
    const { todoId } = action.payload;
    const p = async function() {
        const res = await todoApi.updateTodoStatus(todoId);
        return res;
    };

    yield call(p);
    yield put({
        type: ActionTypes.UPDATE_TODO_STATUS_SUC,
        payload: action.payload,
    });
}

export function* updateTodoContent(action: IAction) {
    const { todoId, content } = action.payload;
    const p = async function() {
        const res = await todoApi.updateTodoContent(todoId, content);
        return res;
    };

    yield call(p);
    yield put({
        type: ActionTypes.UPDATE_TODO_CONTENT_SUC,
        payload: action.payload,
    });
}
