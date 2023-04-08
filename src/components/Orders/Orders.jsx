import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';
import { deleteShoppingCart } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const removeItemHandler =(id)=>{
        const remainingCart = cart.filter(pd => pd.id !== id);
        setCart(remainingCart);
        removeFromDb(id);
    }

    const clearCartHandler =()=>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className="review-items">
                {
                    cart.map(pd => <ReviewItems
                    key={pd.id}
                    product={pd}
                    removeItemHandler={removeItemHandler}
                    ></ReviewItems>)
                }
            </div>
            <div className="product-cart-container">
                <Cart 
                cart={cart}
                clearCartHandler={clearCartHandler}
                >
                    <Link className='link-proceed' to="/checkout">
                        <button className='link-btn'>
                            <span>Checkout</span> 
                            <FontAwesomeIcon className='d-icon' icon={faCreditCard} />
                        </button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Orders;