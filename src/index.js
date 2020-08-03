import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Navigation from './components/navItems/Navigation';
import reducers from './reducers/';



//import thunk from 'redux-thunk'


//const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Navigation />
  </Provider>,
  document.querySelector("#root")
);
