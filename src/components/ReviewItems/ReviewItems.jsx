import React from 'react';
import './ReviewItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItems = ({product, removeItemHandler}) => {
    const {id, img, name, quantity, price} = product;
    return (
        <div className='review-container'>
            <div className='item-info'>
                <img src={img} alt="" />
                <div className='info'>
                    <h5>{name}</h5>
                    <p>Price: <span>${price}</span></p>
                    <p>Quantity: <span>{quantity}</span></p>
                </div>
            </div>
            <div className='btn-container'>
                <button onClick={()=>removeItemHandler(id)}>
                <FontAwesomeIcon className='d-icon' icon={faTrashAlt} />
                </button>
            </div>
        </div>
    );
};

export default ReviewItems;