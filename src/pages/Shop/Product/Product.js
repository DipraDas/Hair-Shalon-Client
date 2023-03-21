import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const { id, img, leftName, rightName, productName, price } = props.product;
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
            {/* <Link to={'/product/'+ id}><button>Buy Now</button></Link> */}
            <Link to="/commingSoon"><button>Buy Now</button></Link>
        </div>
    );
    
};

export default Product; 