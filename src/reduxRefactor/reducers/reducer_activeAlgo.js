export default function(state = null, action) {
  switch(action.type) {
    case 'ALGO_SELECTED':
      return action.payload;
  }
  
  return state
}