import axios from 'axios';

export const selectAlgorithm = algorithm => {
  return dispatch => {
    dispatch({
    type: 'ACTION_ALGORITHM_SELECTED',
    payload: algorithm}
  )
  };
};

export const fetchSomeAlgos = () => {
  return async (dispatch) => {
  const response = await axios.get('http://localhost:3001/api/v1/algorithms/idxe')
  console.log("inside fetch some algos")
  dispatch({ type: 'ACTION_FETCH_SOME_ALGOS', payload: response.data })
  }
};

export const fetchAllAlgos = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/api/v1/algorithms/')
    console.log("inside fetch all algos")
    dispatch({ type: 'ACTION_FETCH_ALL_ALGOS', payload: response.data })
    }
};

export const fetchExamples = () => {
  return dispatch => {
    dispatch({ type: 'ACTION_FETCH_EXAMPLES', payload: "Nothing here" })
  }
};

export const selectExample = () => {
  return dispatch => {
    dispatch({ type: 'ACTION_SELECT_EXAMPLE', payload: "Nothing here" })
  }
};
