import { useState } from 'react';

export const useImage = () => {

    const [isActive, setIsActive] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);

    const handleThumbnailClick = (id) => {
        setIsActive(id);
        setCurrentImage(id);
    }

    const handleNext = () => {
        if ( currentImage < 3) {
            setCurrentImage(prev => prev + 1);
            setIsActive(prev => prev + 1);
        }
    }

    const handlePrevious = () => {
        if ( currentImage > 0) {
            setCurrentImage(prev => prev - 1);
            setIsActive(prev => prev - 1);
        }
    }

    return {
        isActive,
        currentImage,
        handleThumbnailClick,
        handleNext,
        handlePrevious,
    }
}
