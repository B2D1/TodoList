import { ActionTypes, ITodoState, TodoActionTypes } from '../types';

const initialState: ITodoState[] = [];

export default function todoReducer(
  state = initialState,
  action: TodoActionTypes
) {
  switch (action.type) {
    case ActionTypes.ADD_TODO_SUC:
      return [...state, action.payload];
    case ActionTypes.FETCH_TODO_SUC:
      return [...initialState, ...action.payload];
    case ActionTypes.DELETE_TODO_SUC:
      return state.filter((v) => v._id !== action.payload._id);
    case ActionTypes.UPDATE_TODO_STATUS_SUC:
      return state.map((v) =>
        v._id === action.payload._id ? { ...v, status: !v.status } : v
      );
    case ActionTypes.SEARCH_TODO_SUC:
      return [...initialState, ...action.payload];
    case ActionTypes.UPDATE_TODO_CONTENT_SUC:
      return state.map((v) =>
        v._id === action.payload._id
          ? { ...v, content: action.payload.content }
          : v
      );
    default:
      return state;
  }
}
