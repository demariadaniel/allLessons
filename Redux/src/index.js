import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addClicks } from './actions/addClicks';
import { Provider } from 'react-redux';
import store from './store/index';

store.dispatch(addClicks(5))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
