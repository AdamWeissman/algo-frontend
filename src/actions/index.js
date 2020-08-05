import axios from 'axios';

export const selectAlgorithm = algorithm => {
  return {
    type: 'ACTION_ALGORITHM_SELECTED',
    payload: algorithm
  };
};

export const fetchSomeAlgos = () => {
  return function(dispatch, getState) {
  const promise = axios.get('http://localhost:3001/api/v1/algorithms/idxe')
  console.log(promise)
  
  return {
      type: 'ACTION_FETCH_SOME_ALGOS',
      payload: promise
    };
  }
};

export const fetchAllAlgos = () => {
  return {
    type: 'ACTION_FETCH_ALL_ALGOS'
  }
};