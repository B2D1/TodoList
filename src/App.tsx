import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Footer from './components/footer';
import Login from './views/login';
import Register from './views/register';
import Todo from './views/todo';

export default class App extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path='/' component={Login} exact={true} />
                    <Route path='/todo' component={Todo} />
                    <Route path='/register' component={Register} />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}
