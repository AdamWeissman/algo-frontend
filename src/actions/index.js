export const selectAlgorithm = algorithm => {
  return {
    type: 'ACTION_ALGORITHM_SELECTED',
    payload: algorithm
  };
};

export const testThing = () => {
  return {
    type: 'ACTION_TEST_SELECTED',
    payload: "TEST"
  };
};

export const fetchSomeAlgos = () => {
  return {
    type: 'ACTION_FETCH_SOME_ALGOS',
    payload: "HELLO FROM PAYLOAD"
  }
};

export const fetchAllAlgos = () => {
  return {
    type: 'ACTION_FETCH_ALL_ALGOS'
  }
};