import axios from 'axios';

export function resetExampleContent () {
  return (dispatch) => {
    dispatch({
      type: 'RESET_EXAMPLE_CONTENT',
      payload: []
    })
  };
}

export function selectAlgorithm (algorithm) {
  return (dispatch) => {
    console.log(algorithm)
    dispatch({
    type: 'SELECT_ALGO',
    payload: algorithm})
  }
};

export function fetchSomeAlgos() {
  return async (dispatch) => {
  const response = await axios.get('http://localhost:3001/api/v1/algorithms/idxe')
  console.log("inside fetch some algos in actions index")
  dispatch({ type: 'FETCH_SOME_ALGOS', payload: response.data })
  }
};

export function fetchAllAlgos() {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/api/v1/algorithms/')
    console.log("inside fetch all algos in actions index")
    dispatch({ type: 'FETCH_ALL_ALGOS', payload: response.data })
    }
};

export function fetchExamples(the_algorithm) {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/api/v1/algorithms/${the_algorithm}/examples`)
    console.log(response.data)
    dispatch({ type: 'FETCH_EXAMPLES', payload: response.data })
  }
};

// selectExample is for creating koans
export function selectExample(the_algorithm, the_example) {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/api/v1/algorithms/${the_algorithm}/examples/${the_example}`)
    dispatch({ type: 'SELECT_EXAMPLE', payload: response.data })
  }
};

// fetchContent is for viewing koans
export function fetchContent(the_algorithm, the_example) {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/api/v1/algorithms/${the_algorithm}/examples/${the_example}`)
    dispatch({ type: 'FETCH_CONTENT', payload: response.data })
  }
};
