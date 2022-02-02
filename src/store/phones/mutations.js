import axios from "axios";

export async function fetchPhones(state){
    try{
        const phones = await axios.get(`http://localhost:3001/phones?${state.category === null ? '' : `category=${state.category}`}&_sort=${state.sortType}`)
        
        state.phones = phones.data

    }catch(err){
        console.log(err)
    }
}

export function setCategory(state,payload){
    state.category = payload
}

export function setSortType(state, payload){
    state.sortType = payload
}