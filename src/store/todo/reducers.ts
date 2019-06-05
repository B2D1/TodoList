import {
  ADD_TODO_SUC,
  DELETE_TODO_SUC,
  FETCH_TODO_SUC,
  ITodoState,
  SEARCH_TODO_SUC,
  TodoActionTypes,
  UPDATE_TODO_CONTENT_SUC,
  UPDATE_TODO_STATUS_SUC,
} from './types';

const initialState: ITodoState[] = [];

export default function todoReducer(
  state = initialState,
  action: TodoActionTypes
) {
  switch (action.type) {
    case ADD_TODO_SUC:
      return [...state, action.payload];
    case FETCH_TODO_SUC:
      return [...initialState, ...action.payload];
    case DELETE_TODO_SUC:
      return state.filter((v) => v._id !== action.payload._id);
    case UPDATE_TODO_STATUS_SUC:
      return state.map((v) =>
        v._id === action.payload._id ? { ...v, status: !v.status } : v
      );
    case SEARCH_TODO_SUC:
      return [...initialState, ...action.payload];
    case UPDATE_TODO_CONTENT_SUC:
      return state.map((v) =>
        v._id === action.payload._id
          ? { ...v, content: action.payload.content }
          : v
      );
    default:
      return state;
  }
}
