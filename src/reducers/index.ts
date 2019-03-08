import { combineReducers } from 'redux';

import todoReducer from './todo';
import userReducer from './user';

const rootReducer = combineReducers({ todo: todoReducer, user: userReducer });

export default rootReducer;
