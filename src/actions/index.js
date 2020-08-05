import axios from 'axios';

export const selectAlgorithm = algorithm => {
  return {
    type: 'ACTION_ALGORITHM_SELECTED',
    payload: algorithm
  };
};

export const fetchSomeAlgos = () => {
  return async (dispatch) => {
  const response = axios.get('http://localhost:3001/api/v1/algorithms/idxe')
  console.log("inside fetch algos")
  dispatch({ type: 'ACTION_FETCH_SOME_ALGOS', payload: response })
  }
};

export const fetchAllAlgos = () => {
  return {
    type: 'ACTION_FETCH_ALL_ALGOS'
  }
};