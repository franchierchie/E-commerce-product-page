import React, { useState } from 'react';
import { Header, ProductImages, ProductInfo } from './components';
import './scss/app.scss';
import { product } from './data/product';

export const ProductPage = () => {

    const [cart, setCart] = useState({});
    const [isEmpty, setIsEmpty] = useState(true);

    const handleCart = (prod) => {
        setCart(prod);
        setIsEmpty(false);
    }

    const handleRemove = () => {
        setCart({});
        setIsEmpty(true);
    }
    
    return (
    <>
    <Header product={ product } cart={ cart } isEmpty={ isEmpty } handleRemove={ handleRemove } />

    <main className="container">

        <ProductImages product={ product } />

        <ProductInfo product={ product } handleCart={ handleCart } />
    </main>
    </>
    )
}
