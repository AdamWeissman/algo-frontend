export default (state = [], action) => {
  if (action.type === 'ACTION_FETCH_SOME_ALGOS') {
    return action.payload
  }

  return state;
  
  // return [
  //   { algotype: "Some Algo 1" },
  //   { algotype: "Some Algo 2" },
  //   { algotype: "Some Algo 3" },
  //   { algotype: "Some Algo 4" },
  //   { algotype: "Some Algo 5" },
  //   { algotype: "Some Algo 6" }]
}
