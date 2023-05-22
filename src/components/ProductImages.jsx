import React, { useState } from 'react'
import { ImageOpen } from './ImageOpen'
import { useImage } from '../hooks';

export const ProductImages = ({ product }) => {

    const [imgOpen, setImgOpen] = useState(false);
    const { isActive, currentImage, handleThumbnailClick, handleNext, handlePrevious, } = useImage();

    const handleImgOpen = () => {
        setImgOpen(prev => !prev);
    }

    return (
    <>
    {
        (window.innerWidth > 1024) && (
            <ImageOpen
                product={ product }
                isOpen={ imgOpen }
                onClick={ handleImgOpen }
            />
        )
    }

    <div className="images-container">
        <div className="image-container">
            <img onClick={ handleImgOpen } className="product-image" src={`./${ product.images.product[currentImage] }`} alt="Product Image" />

            <button onClick={ handlePrevious } className="img-btn btn-previous">
                <img src="./icon-previous.svg" alt="Previous photo" />
            </button>

            <button onClick={ handleNext } className="img-btn btn-next">
                <img src="./icon-next.svg" alt="Next photo" />
            </button>
        </div>

        <div className="product-thumbnails">
            <div
                onClick={() => handleThumbnailClick(0)}
                className={`thumbnail ${(isActive === 0) ? 'img-active' : ''}`}
            >
                <img src={`./${ product.images.thumbnails[0] }`} alt="Product thumbnail" />
            </div>

            <div
                onClick={() => handleThumbnailClick(1)}
                className={`thumbnail ${(isActive === 1) ? 'img-active' : ''}`}
            >
                <img src={`./${ product.images.thumbnails[1] }`} alt="Product thumbnail" />
            </div>

            <div
                onClick={() => handleThumbnailClick(2)} 
                className={`thumbnail ${(isActive === 2) ? 'img-active' : ''}`}
            >
                <img src={`./${ product.images.thumbnails[2] }`} alt="Product thumbnail" />
            </div>

            <div
                onClick={() => handleThumbnailClick(3)}
                className={`thumbnail ${(isActive === 3) ? 'img-active' : ''}`}
            >
                <img src={`./${ product.images.thumbnails[3] }`} alt="Product thumbnail" />
            </div>
        </div>
    </div>
    </>
    )
}
