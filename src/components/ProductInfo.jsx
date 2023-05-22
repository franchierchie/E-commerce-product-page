import React, { useState } from 'react'

export const ProductInfo = ({ product, handleCart }) => {
    
    const [amount, setAmount] = useState(product.amount);

    const handleAmountPlus = () => {
        setAmount(prev => prev + 1);
    }

    const handleAmountMinus = () => {
        if ( amount > 1 ) {
            setAmount(prev => prev - 1);
        }
    }

    return (
    <div className="info-container">
        <h2 className="info-company">{ product.company }</h2>
        <h1>{ product.name }</h1>
        <p className="info-description">{ product.description }</p>

        <div className="product-price">
            <p className="product-current-price">${ product.price.current.toFixed(2) } <span>{ product.price.discount }%</span></p>
            <p className="product-previous-price">${ product.price.previous.toFixed(2) }</p>
        </div>

        <div className="cart-container">
            <div className="product-amount">
                <button onClick={ handleAmountMinus } className="minus"></button>
                <div>{ amount }</div>
                <button onClick={ handleAmountPlus } className="plus"></button>
            </div>

            <button onClick={ 
                () => handleCart({
                    id: product.id,
                    name: product.name,
                    images: product.images.thumbnails[0],
                    price: product.price.current,
                    amount: amount,
                }) }

                className="add-to-cart-btn"
            >
                <img src="./icon-cart.svg" alt="cart icon" />
                Add to cart
            </button>
        </div>
    </div>
    )
}
