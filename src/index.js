import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import Navigation from './components/Navigation';
import reducers from './store/reducers/'

const store = createStore(reducers, applyMiddleware(thunk)); // or... create a store.js and import it

ReactDOM.render(
  <Provider store={store}>
    <Navigation />
  </Provider>,
  document.querySelector("#root")
);

//setup store
//reducers