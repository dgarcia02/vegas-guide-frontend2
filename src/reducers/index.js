import counterReducer from './counter';
import isLoggedReducer from './isLogged';
import loginModalReducer from './loginModal';
// built in redux that brings all reducers together
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    // // left counter is the state name
    // // right counterReducer is the actual value from the reducer
    counter: counterReducer,
    isLogged: isLoggedReducer,
    loginOpen: loginModalReducer
})

export default allReducers;
