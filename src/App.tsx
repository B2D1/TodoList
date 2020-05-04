import { message } from 'antd';
<<<<<<< HEAD
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from 'src/components/Footer';
import Index from 'src/views/Index';
import Todo from 'src/views/Todo';
=======
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Index from './views/Index';
import Todo from './views/Todo';
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb

// 配置全局 message
message.config({
  duration: 1,
<<<<<<< HEAD
  maxCount: 3
});
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
=======
  maxCount: 3,
});

const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Index} exact={true} />
        <Route path="/todo" component={Todo} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
);

export default App;
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
