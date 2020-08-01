import axios from 'axios';

export const fetchAllAlgorithms = () => {
  return function(dispatch, getState) {
  const promise = axios.get('http://localhost:3001/api/v1/algorithms/')

    return {
      type: 'FETCH_ALL_ALGORITHMS',
      payload: promise
    };
  }
};