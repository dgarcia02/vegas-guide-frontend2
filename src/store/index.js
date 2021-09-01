// import redux
import { createStore } from 'redux';

// Reducer
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }

    return state
}

// Store
    // creates redux store
const store = createStore(counterReducer)

// Subscriber

export default store;
