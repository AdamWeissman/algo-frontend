import { combineReducers } from 'redux';
import algorithmsReducer from './algorithmsReducer'
//import allAlgorithmsReducer from './allAlgorithmsReducer'

const algorithmSelectedReducer = (selectedAlgo = null, action) => {
  if (action.type === 'ACTION_ALGORITHM_SELECTED') {
    return action.payload;
  }

  return selectedAlgo;
};

const examplesListReducer = () => {
  return "REPLACE THIS CODE"
};

const exampleSelectedReducer = () => {
  return "REPLACE THIS CODE"
};

const exampleContentReducer = () => {
  return "REPLACE THIS CODE"
};

export default combineReducers({
  someAlgos: algorithmsReducer,
  allAlgos: algorithmsReducer,
  selectedAlgo: algorithmSelectedReducer,
  examplesList: examplesListReducer,
  exampleSelected: exampleSelectedReducer,
  exampleContent: exampleContentReducer
});
