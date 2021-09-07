const userAuthReducer = (state = { username: '', password: '' }, action) => {
    switch(action.type) {
        case 'ADD':
            return [ ...state, action.user ]
        default:
            return state
    }
}

export default userAuthReducer;
