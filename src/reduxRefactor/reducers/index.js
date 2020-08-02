//THIS IS ALL BOILER PLATE CODE

import AllAlgosReducer from './reducer_algos'
import { combineReducers} from 'redux';

const rootReducer = combineReducers({
  algorithms: AllAlgosReducer
})

export default rootReducer;

