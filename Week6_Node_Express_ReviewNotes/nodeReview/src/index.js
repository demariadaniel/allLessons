import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserForm from './UserForm';
import UserList from './UserList';
import './index.css';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={UserForm} />
      <Route path="/list" component={UserList} />
    </Route>
  </Router>,
  document.getElementById('root')
);
