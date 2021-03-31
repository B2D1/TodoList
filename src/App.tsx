import './App.css';

import { message } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from './views/Index';
import Todo from './views/Todo';

// 配置全局 message
message.config({
  duration: 1,
  maxCount: 3,
});

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Index} exact={true} />
        <Route path="/todo" component={Todo} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
