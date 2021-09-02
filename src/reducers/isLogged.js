const isLoggedReducer = (state = false, action) => {
    switch(action.type) {
        case 'LOG_IN':
        // the !state will flip the current state to the opposite
            return !state;
        default:
            return state
    }
}

export default isLoggedReducer;
