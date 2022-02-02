export function logIn(state,payload){
    state.token = payload.token
    state.isAuthenticated = payload.isAuthenticated
}

export function logOut(state){
    state.token = null
    state.isAuthenticated = false
}


