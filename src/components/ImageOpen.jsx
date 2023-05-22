import { useImage } from '../hooks';

export const ImageOpen = ({ product, isOpen, onClick }) => {

    const { isActive, currentImage, handleThumbnailClick, handleNext, handlePrevious } = useImage();

    return (
    <div className={`image-open ${ isOpen ? '' : 'hidden' }`}>
        <button onClick={ onClick } className="close-btn">
            <img src="./icon-close.svg" alt="close lightbox" />
        </button>
        <div className="images-container">
            <div className="image-container">
                <img className="product-image" src={`./${ product.images.product[currentImage] }`} alt="Product Image" />
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
    </div>
    )
}
