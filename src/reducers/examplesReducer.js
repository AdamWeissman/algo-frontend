export default (state = [], action) => {
  switch (action.type) {
    case 'ACTION_FETCH_EXAMPLES': 
      return action.payload
    case 'ACTION_SELECT_EXAMPLE':
      return action.payload
    default:
      return state
  }    
}