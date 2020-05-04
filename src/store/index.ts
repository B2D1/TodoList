import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../saga';
import todoReducer from './todo/reducers';
import userReducer from './user/reducers';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ todo: todoReducer, user: userReducer });

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
export type AppStore = ReturnType<typeof rootReducer>;
sagaMiddleware.run(rootSaga);
