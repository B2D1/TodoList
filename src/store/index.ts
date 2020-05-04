import { applyMiddleware, combineReducers, createStore } from 'redux';
<<<<<<< HEAD
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'src/saga';

=======
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../saga';
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
import todoReducer from './todo/reducers';
import userReducer from './user/reducers';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ todo: todoReducer, user: userReducer });

<<<<<<< HEAD
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
=======
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
export type AppStore = ReturnType<typeof rootReducer>;
sagaMiddleware.run(rootSaga);
