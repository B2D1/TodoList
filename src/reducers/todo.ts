import actionTypes from '../types';
import { Action } from '../interface/Action';
import { TodoState } from '../interface/TodoState';

let initialState: TodoState[];
initialState = [];

export default function todos(state = initialState, action: Action) {
    switch (action.type) {
        case actionTypes.ADD_TODO_SUC:
            return [...state, action.payload];
        case actionTypes.FETCH_TODO_SUC:
            return [...initialState, ...action.payload];
        case actionTypes.DELETE_TODO_SUC:
            return state.filter(v => v._id !== action.payload);
        case actionTypes.UPDATE_TODO_STATUS_SUC:
            return state.map(v =>
                v._id === action.payload.todo_id
                    ? { ...v, status: !v.status }
                    : v
            );
        case actionTypes.SEARCH_TODO_SUC:
            return [...initialState, ...action.payload];
        case actionTypes.UPDATE_TODO_CONTENT_SUC:
            return state.map(v =>
                v._id === action.payload.todo_id
                    ? { ...v, content: action.payload.content }
                    : v
            );
        default:
            return state;
    }
}
