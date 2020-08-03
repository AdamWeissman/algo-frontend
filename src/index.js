import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './components/navItems/Navigation';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk'
import reducer from './reducers/'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <Navigation />
  </Provider>,
  document.querySelector("#root")
);
