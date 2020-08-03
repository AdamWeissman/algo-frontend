import { combineReducers } from 'redux';

const someAlgorithmsReducer = () => {
  return [
    { algotype: "SomeAlgo 1" },
    { algotype: "SomeAlgo 2" },
    { algotype: "SomeAlgo 3" },
    { algotype: "SomeAlgo 4" },
    { algotype: "SomeAlgo 5" },
    { algotype: "SomeAlgo 6" }
  ];
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
