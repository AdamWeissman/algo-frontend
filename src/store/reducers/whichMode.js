import * as actionTypes from '../actions/actions';

export default function controlMode( state = {
  mode: ""
}, action) {
  switch(action.type) {
    case actionTypes.WHICH_MODE_DEFAULT:
      return {
        ...state,
        mode: ""
      }
    case actionTypes.WHICH_MODE_EXPLORE:
      return {
        ...state,
        mode: "EXPLORE"
      }
    case actionTypes.WHICH_MODE_CREATE:
    return {
        ...state,
        mode: "CREATE"
      }

    default: 
      return state;
  }
}