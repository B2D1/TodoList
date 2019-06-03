import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Footer from './components/Footer';
import Index from './views/Index';
import Todo from './views/Todo';

export default class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path='/' component={Index} exact={true} />
          <Route path='/todo' component={Todo} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}
