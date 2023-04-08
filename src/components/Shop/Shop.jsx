import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [storage, setStorage] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart()
        const savedCart = [];
        // step 1: get id from local storage

        for (const id in storedCart) {
            //step 2: get product by id;

            const addedProduct = products.find(product => product.id === id);

            //step 3: get quantity of the product;
            if (addedProduct) {
                addedProduct.quantity = storedCart[id];

                savedCart.push(addedProduct);
            }

        }
        setCart(savedCart)
        //[products] because, if products data will update this useEffect again call;
    }, [products])

    const addToCart = (product) => {
        //const newCart = [...cart, product];
        let newCart = [];
        //
        const exist = cart.find(pd => pd.id === product.id);
        if (!exist) {
            product.quantity = 1;
            newCart = [...cart, product]
        } else {
            exist.quantity += 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exist]

        }

        setCart(newCart);
        addToDb(product.id)

    }

    const clearCartHandler = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product addToCart={addToCart} key={product.id} product={product}></Product>)
                }
            </div>
            <div className="product-cart-container">
                <Cart
                    cart={cart}
                    clearCartHandler={clearCartHandler}
                >
                    <Link className='link-proceed' to='/orders'>
                        <button className='link-btn'>
                            <span>Review Order</span>
                            <FontAwesomeIcon className='d-icon' icon={faAngleRight} />
                        </button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;