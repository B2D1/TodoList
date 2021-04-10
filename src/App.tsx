import './App.css';

import { message } from 'antd';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from 'views/Home';

import Login from './views/Login';
import Todo from './views/Todo';

// 配置全局 message
message.config({
  duration: 1,
  maxCount: 3,
});

const App = () => (
  <>
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/todo" component={Todo} />
    </BrowserRouter>
  </>
);

export default App;
