import { useState } from 'react'
import { product } from '../data/product';

export const useCart = () => {

    const [cart, setCart] = useState({});
    const [isEmpty, setIsEmpty] = useState(true);

    const handleCart = () => {
        setCart({
            id: product.id,
            name: product.name,
            images: product.images.thumbnails[0],
            price: product.price.current,
            amount: product.amount,
        });
        setIsEmpty(false);
    }

    const handleRemove = () => {
        setCart({});
        setIsEmpty(true);
    }

    return {
        cart,
        isEmpty,
        handleCart,
        handleRemove,
    }
}
