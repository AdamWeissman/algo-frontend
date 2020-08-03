export const selectAlgorithm = algorithm => {
  return {
    type: 'ACTION_ALGORITHM_SELECTED',
    payload: algorithm
  };
};

export const fetchSomeAlgos = () => {
  return {
    type: 'ACTION_FETCH_SOME_ALGOS'
  }
};

export const fetchAllAlgos = () => {
  return {
    type: 'ACTION_FETCH_ALL_ALGOS'
  }
};