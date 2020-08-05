import { combineReducers } from 'redux';

const someAlgorithmsReducer = (someAlgos = null, action) => {
  if (action.type === 'ACTION_FETCH_SOME_ALGOS') {
    return action.payload;
  }

  return someAlgos;
};

const allAlgorithmsReducer = () => {
  return [
    { algotype: "AllAlgo 1" },
    { algotype: "AllAlgo 2" },
    { algotype: "AllAlgo 3" },
    { algotype: "AllAlgo 4" },
    { algotype: "AllAlgo 5" },
    { algotype: "AllAlgo 6" }
  ];
};

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
