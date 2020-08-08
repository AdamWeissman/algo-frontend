import { combineReducers } from 'redux';
import algorithmsReducer from './algorithmsReducer'
import examplesReducer from './examplesReducer'

export default combineReducers({
  algorithms: algorithmsReducer
  // someAlgos: algorithmsReducer,
  // allAlgos: algorithmsReducer
  // selectedAlgo: algorithmsReducer,
  // examplesList: examplesReducer,
  // exampleSelected: examplesReducer,
  // exampleContent: examplesReducer
});

