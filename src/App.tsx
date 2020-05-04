import { message } from 'antd';
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Index from './views/Index';
import Todo from './views/Todo';

// 配置全局 message
message.config({
  duration: 1,
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
