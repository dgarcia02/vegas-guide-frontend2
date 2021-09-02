const isLoggedReducer = (state = false, action) => {
    switch(action.type) {
        case 'SIGN_IN':
        // the !state will flip the current state to the opposite
            return !state;
    }
}

export default isLoggedReducer;
