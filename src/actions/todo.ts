import actionTypes from '../types';

export function addTodo(user_id: string, content: string) {
    return {
        type: actionTypes.ADD_TODO,
        payload: {
            user_id,
            content,
        },
    };
}

export function fetchTodo(user_id: string) {
    return {
        type: actionTypes.FETCH_TODO,
        payload: {
            user_id,
        },
    };
}

export function searchTodo(user_id: string, q: string) {
    return {
        type: actionTypes.SEARCH_TODO,
        payload: {
            user_id,
            q,
        },
    };
}

export function deleteTodo(todo_id: string) {
    return {
        type: actionTypes.DELETE_TODO,
        payload: {
            todo_id,
        },
    };
}

export function updateTodoStatus(todo_id: string) {
    return {
        type: actionTypes.UPDATE_TODO_STATUS,
        payload: {
            todo_id,
        },
    };
}

export function updateTodoContent(todo_id: string, content: string) {
    return {
        type: actionTypes.UPDATE_TODO_CONTENT,
        payload: {
            todo_id,
            content,
        },
    };
}
