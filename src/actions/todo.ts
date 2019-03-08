import ActionTypes from '../types';

export function addTodo(userId: string, content: string) {
    return {
        type: ActionTypes.ADD_TODO,
        payload: {
            userId,
            content,
        },
    };
}

export function fetchTodo(userId: string) {
    return {
        type: ActionTypes.FETCH_TODO,
        payload: {
            userId,
        },
    };
}

export function searchTodo(userId: string, q: string) {
    return {
        type: ActionTypes.SEARCH_TODO,
        payload: {
            userId,
            q,
        },
    };
}

export function deleteTodo(todoId: string) {
    return {
        type: ActionTypes.DELETE_TODO,
        payload: {
            todoId,
        },
    };
}

export function updateTodoStatus(todoId: string) {
    return {
        type: ActionTypes.UPDATE_TODO_STATUS,
        payload: {
            todoId,
        },
    };
}

export function updateTodoContent(todoId: string, content: string) {
    return {
        type: ActionTypes.UPDATE_TODO_CONTENT,
        payload: {
            todoId,
            content,
        },
    };
}
