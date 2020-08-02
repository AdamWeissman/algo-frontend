import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './components/Navigation'; //was formerly app, but using navigation 08.02.2020

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// import thunk from 'redux-thunk'
import reducers from './reduxRefactor/reducers/'

const createStoreWithMiddleware = applyMiddleware()(createStore); //will probably need to add thunk here later


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Navigation /> //typically this would be app, but is navigation since router was added after the fact
  </Provider>,
  document.querySelector("#root")
);



// const store = createStore(reducer, applyMiddleware(thunk)); // or... create a store.js and import it

// ReactDOM.render(
//   <Provider store={store}>
//     <Navigation /> //typically this would be app, but is navigation since router was added after the fact
//   </Provider>,
//   document.querySelector("#root")
// );

//setup store
//reducers