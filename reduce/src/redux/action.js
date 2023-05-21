import { ADD_TO_CART, REMOVE_TO_CART,EMPTY_TO_CART } from "./constaint"

export const addToCart = (data) =>{
     console.log("action called", data)
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeToCart = (data) =>{
    console.log("action remove", data)
   return {
       type: REMOVE_TO_CART,
       data
   }
}

export const emptyToCart = (data) =>{
    console.log("action empty", data)
   return {
       type: EMPTY_TO_CART
   }
}