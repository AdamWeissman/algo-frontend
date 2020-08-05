import { combineReducers } from 'redux';
import someAlgorithmsReducer from './someAlgorithmsReducer'
import allAlgorithmsReducer from './allAlgorithmsReducer'

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
  someAlgos: someAlgorithmsReducer,
  allAlgos: allAlgorithmsReducer,
  selectedAlgo: algorithmSelectedReducer,
  examplesList: examplesListReducer,
  exampleSelected: exampleSelectedReducer,
  exampleContent: exampleContentReducer
});
