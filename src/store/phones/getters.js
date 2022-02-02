export function getPhones(state){
    return state.phones
}

export function getPhoneById(state){
    return (id) => {
        return state.phones.find(phone => phone.id === id)
    }
}

export function getCategory(state){
    return state.category
}