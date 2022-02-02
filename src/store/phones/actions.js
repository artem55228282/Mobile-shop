export async function fetchPhones({commit}){
    return commit('fetchPhones')
}

export function setLoading({commit}, payload){
    return commit('setLoading', payload)
}

export function setCategory({commit, dispatch}, payload){
    commit('setCategory', payload)
    dispatch('phonesObj/fetchPhones', payload, { root: true })
}

export function setSortType({commit}, payload){
    commit('setSortType', payload)
    commit('fetchPhones')
}