export const selectAlgorithm = algorithm => {
  return {
    type: 'ACTION_ALGORITHM_SELECTED',
    payload: algorithm
  };
};