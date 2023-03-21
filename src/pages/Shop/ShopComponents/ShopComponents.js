import React from 'react';
import Products from '../Products/Products';
import ShopBanner from '../ShopBanner/ShopBanner';

const ShopComponents = () => {
    return (
        <div>
            <ShopBanner></ShopBanner>
            <Products></Products>
        </div>
    );
};

export default ShopComponents;