import {SET_PRODUCT_LIST } from "./constaint"
export const productData = (data= [], action)=>{

    switch (action.type){
        case SET_PRODUCT_LIST:
            //add to cart logic
            console.log('PRODUCT_LIST', action)
        return [...action.data];

         default:
                return data
    }
}