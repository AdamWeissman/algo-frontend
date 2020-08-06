import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import Navigation from './components/navItems/Navigation';
import reducers from './reducers/';

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Navigation />
  </Provider>,
  document.querySelector("#root")
);
