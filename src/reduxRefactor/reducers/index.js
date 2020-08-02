//THIS IS ALL BOILER PLATE CODE

import AllAlgosReducer from './reducer_algos'
import ActiveAlgo from './reducer_activeAlgo'
import { combineReducers} from 'redux';

const rootReducer = combineReducers({
  algorithms: AllAlgosReducer,
  activeAlgo: ActiveAlgo
})

export default rootReducer;

