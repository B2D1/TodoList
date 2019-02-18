import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/register';
import Todo from './views/todo';
import Footer from './components/footer';

export default class App extends React.Component {
    render() {
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
