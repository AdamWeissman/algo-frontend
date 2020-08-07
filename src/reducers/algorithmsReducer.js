// const initialState = {
  
//     data: {
//       algotype: "stupid",
//       id: 1
//     } 
  
// };

export default (state = { someAlgos: [] }, action) => {
  switch (action.type) {
    case 'FETCH_SOME_ALGOS': 
      return {
        ...state,
        someAlgos: [...state.someAlgos, action.payload]
      }
    case 'FETCH_ALL_ALGOS':
      return action.payload
    // case 'ACTION_ALGORITHM_SELECTED':
    //    return action.payload
    default:
      return state
  };
};
