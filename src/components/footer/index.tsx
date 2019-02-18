import * as React from 'react';
require('./index.css');

const Footer = () => (
    <div className='footer'>
        <a target='_blank' href='https://b2d1.top/'>
            <span>Copyright © 2019 B2D1</span>
        </a>
        <div className='by_farbox'>
            <a
                target='_blank'
                href='https://github.com/Ben02/hexo-theme-Anatole'
            >
                React + Typescript + Koa2 + mongodb / Todo List
            </a>
        </div>
    </div>
);

export default Footer;
