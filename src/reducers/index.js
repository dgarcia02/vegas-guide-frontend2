import counterReducer from './counter';
import isLoggedReducer from './isLogged';
// built in redux that brings all reducers together
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    // // left counter is the name you are giving it to call it later
    // // right counterReducer is the actual value from the reducer
    counter: counterReducer,
    isLogged: isLoggedReducer
})

export default allReducers;
