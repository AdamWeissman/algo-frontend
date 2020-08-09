
export default (state = { 
  someAlgos: [],
  allAlgos: [],
  selectedAlgo: null,
  selectedAlgoCreateMode: null,
  }, action) => {
  switch (action.type) {
    case 'FETCH_SOME_ALGOS': 
      return {
        ...state,
        someAlgos: action.payload
      }
    case 'FETCH_ALL_ALGOS':
      return {
        ...state,
        allAlgos: action.payload
      }
    case 'SELECT_ALGO':
      return {
        ...state,
        selectedAlgo: action.payload,
        selectedAlgoCreateMode: action.payload
      }
    case 'RESET_ALGO':
      return {
        ...state,
        selectedAlgoCreateMode: action.payload
      }
    default:
      return state
  };
};
