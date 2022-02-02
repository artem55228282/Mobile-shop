export function getCartItems(state){
    return state.phones
}


export function getCartTotalPrice(state, getters) {

    return getters.getCartItems.reduce((total, product) => {
      return total + product.price * product.count
    }, 0)
    
}


export function getCartTotalCount(state, getters){
    return getters.getCartItems.reduce((total, product) => {
        return total + product.count
    }, 0)
}