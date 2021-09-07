// actions is what we want it to do
export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const logIn = () => {
    return {
        type: 'LOG_IN'
    }
}

export const open_close = () => {
    return {
        type: 'OPEN_CLOSE'
    }
}

// export const setShow = () => {
//     return {
//         type: 'SET_SHOW'
//     }
// }

export const userAuth = (event) => {
    return {
        type: 'ADD',
        username: event.value,
        password: event.value
    }
}




//
