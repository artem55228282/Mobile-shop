export function pushToCart({state,commit}, payload){
  const cartItem = state.phones.find(phone => phone.id === payload.id)
  if(!cartItem){
    commit('addToCart', {...payload, count: 1})
  }else{
    commit('incrementItemCount', cartItem.id)
  }
}

export function updateCart({commit}, payload){
  return commit('updateCart', payload)
}

export function incrementItemCount({commit}, payload){
  return commit('incrementItemCount', payload)
}

export function decrementItemCount({commit}, payload){
  return commit('decrementItemCount', payload)
}

export function removeItem({commit}, payload){
  return commit('removeItem', payload)
}

