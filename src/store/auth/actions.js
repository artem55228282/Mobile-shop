export function logIn({commit}, payload){
  commit('logIn', payload)
}

export function logOut({commit}){
  commit('logOut')
}
