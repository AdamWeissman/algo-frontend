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
        // ...state,
        someAlgos: action.payload
      }
    case 'FETCH_ALL_ALGOS':
      return {
        // ...state,
        allAlgos: action.payload
      }
    default:
      return state
  };
};
