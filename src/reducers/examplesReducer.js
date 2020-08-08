export default (state = {
  examples: [],
  selectedExample: null,
  exampleContent: null
  }, action) => {
  switch (action.type) {
    case 'FETCH_EXAMPLES': 
      return {
        ...state,
        examples: action.payload
      }
    case 'SELECT_EXAMPLE':
      return {
        ...state,
        selectedExample: action.payload
      }
    case 'FETCH_CONTENT':
      return {
        ...state,
        exampleContent: action.payload
      }
    default:
      return state
  };
};