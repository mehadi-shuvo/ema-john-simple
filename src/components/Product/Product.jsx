import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {id,img, name, price, ratings,seller,}= props.product
    const addToCart = props.addToCart;
    return (
        <div className='product-cart'>
            <img src={img} alt="" />
            <div className="product-info">
                <p>{name}</p>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={()=>addToCart(props.product)} className='cart-btn' >Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;