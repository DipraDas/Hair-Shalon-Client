import React, { useEffect, useState } from 'react';
import Categories from '../Categories/Categories';
import Product from '../Product/Product';
import UpCommingProduct from '../UpCommingProduct/UpCommingProduct';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [upcommingProducts, setUpcommingProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('../../../product.JSON')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [])
    useEffect(() => {
        fetch('../../../upCommingProduct.JSON')
            .then(response => response.json())
            .then(data => setUpcommingProducts(data));
    }, [])
    useEffect(() => {
        fetch('../../../categories.JSON')
            .then(response => response.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <div className="products py-5">
                <div className="container">
                    <div className="row p-0 m-0">
                        <div className='show'>Showing 1-15 of 15 results</div>
                        <div className="col-lg-9 col-md-12 px-4">
                            <div className="proContainer">
                                {
                                    products.map(product =>
                                        <Product
                                            key={product.id}
                                            product={product}
                                        ></Product>
                                    )
                                }
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 rightProducts">
                            <h4>Upcomming Products</h4>
                            {
                                upcommingProducts.map(upcommingProduct =>
                                    <UpCommingProduct
                                        key={upcommingProduct.id}
                                        upcommingProduct={upcommingProduct}
                                    ></UpCommingProduct>
                                )
                            }
                            <h5>Categories</h5>
                            {
                                categories.map(category =>
                                    <Categories
                                        key={category.id}
                                        category={category}
                                    ></Categories>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;