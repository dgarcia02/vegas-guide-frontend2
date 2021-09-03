const loginModalReducer = (state = false, action) => {
    switch(action.type) {
        case 'OPEN_CLOSE':
            return !state;
        default:
            return state
    }
}

export default loginModalReducer;
