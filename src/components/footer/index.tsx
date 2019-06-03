import './index.scss';

import * as React from 'react';

const Footer: React.FunctionComponent = () => (
  <div className='footer'>
    <a target='_blank' href='https://b2d1.top/'>
      <span>Copyright © 2019 B2D1</span>
    </a>
    <div className='by_farbox'>
      <a target='_blank' href='https://github.com/B2D1/TodoList'>
        React + TS + Koa2 + MongoDB / TodoList
      </a>
    </div>
  </div>
);

export default Footer;
