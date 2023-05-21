import { productList } from '../redux/productAction';
import { addToCart, emptyToCart, removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux';
//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData)
  console.log("data in main componenet from Saga", data)
  
  useEffect(()=>{
   dispatch(productList())
  },[])
  
  return (
    <div>
      <div>
        <button onClick={() => dispatch(emptyToCart())}>Empty To Card</button>
      </div>
           <div className='product-container'>
        {
          data.map((item) => <div key={item.id} className='product-item'>
            <img src={item.photo} alt='' />
            <div>Name: {item.name}</div>
            <div>Color: {item.color}</div>
            <div>Price: {item.price}</div>
            <div>Category: {item.category}</div>
            <div>Brand: {item.brand}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>Add To Button</button>

              <button onClick={() => dispatch(removeToCart(item.id))}>REmove To Button</button>
              </div>
          </div>)
        }

      </div>
    </div>
  );
}

export default Main;
