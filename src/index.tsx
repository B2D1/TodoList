import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { store } from './store';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';

var mountNode = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    mountNode as HTMLElement
);
