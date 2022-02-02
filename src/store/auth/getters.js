export function isAuthenticated(state) {
    return !!state.isAuthenticated;
}

export function getToken(state){
    return state.token
}
