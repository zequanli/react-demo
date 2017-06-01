import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './component/Profile';

const props = {
   name: 'zequanli',
   age: 23
};

ReactDOM.render(
  <Profile {...props} />,
  document.getElementById('root')
);