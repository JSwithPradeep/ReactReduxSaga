import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_TO_CART } from "./constaint"
export const cartData = (data= [], action)=>{

    switch (action.type){
        case ADD_TO_CART:
            //add to cart logic
            console.log('Add_To_Cart condition', action)
        return [action.data, ...data];

        case REMOVE_TO_CART:
            //add to cart logic
            console.log('Remove_To_Cart condition', action)
           // data.length = data.length ? data.length-1:[]
           const remainigItem = data.filter((item)=>item.id!==action.data);
           console.log("remaing item",remainigItem)
            return [...remainigItem];
            
            case EMPTY_TO_CART:
            //add to cart logic
            console.log('Empty DAta', action)
            data = []
            return [...data];
            
            default:
                return data
    }
}