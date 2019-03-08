import { IAction } from '../interface/Action';
import { ITodoState } from '../interface/TodoState';
import ActionTypes from '../types';

let initialState: ITodoState[];
initialState = [];

export default function todos(state = initialState, action: IAction) {
    switch (action.type) {
        case ActionTypes.ADD_TODO_SUC:
            return [...state, action.payload];
        case ActionTypes.FETCH_TODO_SUC:
            return [...initialState, ...action.payload];
        case ActionTypes.DELETE_TODO_SUC:
            return state.filter(v => v._id !== action.payload.todoId);
        case ActionTypes.UPDATE_TODO_STATUS_SUC:
            return state.map(v =>
                v._id === action.payload.todoId
                    ? { ...v, status: !v.status }
                    : v
            );
        case ActionTypes.SEARCH_TODO_SUC:
            return [...initialState, ...action.payload];
        case ActionTypes.UPDATE_TODO_CONTENT_SUC:
            return state.map(v =>
                v._id === action.payload.todoId
                    ? { ...v, content: action.payload.content }
                    : v
            );
        default:
            return state;
    }
}
