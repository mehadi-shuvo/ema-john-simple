import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart,clearCartHandler, children}) => {
    //console.log(cart)
    let total = 0;
    let shippingPrice = 0;

    let quantity = 0;

    for(const product of cart){
        // product.quantity = product.quantity || 1;

        total += product.price * product.quantity;
        shippingPrice += product.shipping
        quantity += product.quantity;
    }
    let taxPrice = total*7/100;
    const grandTotal = total + shippingPrice + taxPrice;
    return (
        <div className='cart-container'>
            <p>Order Summary</p>
            <hr />
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total.toFixed(2)}</p>
            <p>Shipping Price: ${shippingPrice.toFixed(2)}</p>
            <p>Tax: {taxPrice.toFixed(2)}</p>
            <p>Grand Total Price: {grandTotal}</p>
            <button
            onClick={clearCartHandler} 
            className='clear-btn'>
                <span>Clear Cart</span> 
                <FontAwesomeIcon className='d-icon' icon={faTrashAlt} />
            </button>
            {
                children
            }
        </div>
    );
};

export default Cart;