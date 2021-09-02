const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        // if none of these cases are called, then return the current state
        default:
            return state
    }
}

export default counterReducer;
