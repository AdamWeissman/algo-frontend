export default (state = [], action) => {
  switch (action.type) {
    case 'ACTION_FETCH_SOME_ALGOS': 
      return action.payload
    case 'ACTION_FETCH_ALL_ALGOS':
      return action.payload
    case 'ACTION_ALGORITHM_SELECTED':
       return action.payload
    default:
      return state
  }
}
