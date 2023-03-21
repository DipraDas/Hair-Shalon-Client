import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../features/cart/cartSlice';
import './Product.css';
import toast, { Toaster } from 'react-hot-toast';


const Product = (props) => {
    const { id, img, leftName, rightName, productName, price } = props.product;
    const dispatch = useDispatch();
    const notify = () => toast('Here is your toast.');
    useEffect(() => {

    }, [])
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="productSpecificContainer">
                <div>{leftName}</div>
                <div className='roundC'></div>
                <div>{rightName}</div>
            </div>
            <h1>{productName}</h1>
            <h2>£{price}</h2>
            <button onClick={() => dispatch(addToCart(props.product))} >Add to Cart</button>
        </div>
    );

};

export default Product; 