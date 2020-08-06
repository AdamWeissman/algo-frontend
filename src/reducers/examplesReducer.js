export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_EXAMPLES': 
      return action.payload
    case 'SELECT_EXAMPLE':
      return action.payload
    default:
      return state
  };
};