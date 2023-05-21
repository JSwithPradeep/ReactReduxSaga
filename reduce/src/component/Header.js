import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { productSearch } from '../redux/productAction';

const Header = () => {
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  console.log("redux data in header", result);
  return (


    <div className='header'>
      <Link to="/"><h1 className='logo'>E-comm</h1></Link>
      <div className='search-box'>
          <input type='text' onChange={(event) => dispatch(productSearch(event.target.value))} placeholder='Search Product' />
        </div>
      <Link to="/card">
        <div className='card'>
          <span>{result.length}</span>
          <img src='images/red-shipping-cargo-container-logistics-260nw-645851533.webp' alt='cargo' />
        </div>
      </Link>
    </div>
  )
}

export default Header