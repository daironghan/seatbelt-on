import { useState } from "react";
import "./sneakpeak.css";
const ImageSlider = ({ slides }) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideStyles = {
        width: "100%",
        height: "100%",
        backgroundImage: `url(${slides[currentIndex].url})`,
        backgroundSize: "contain",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
    };
    const getPrevious = () => {
        const isFirst = currentIndex === 0;
        const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const getNext = () => {
        const isLast = currentIndex === slides.length - 1;
        const newIndex = isLast ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
    };
    const dotStyles = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '20px,'
    };
    const getSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }
    return (
        <div className="slider">
            <div className="buttonContainer">
                <button onClick={getPrevious} id="leftBtn"></button>
                <button onClick={getNext} id="rightBtn"></button>
            </div>

            <div style={slideStyles}></div>
            {/*
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} style={dotStyles} onClick={() => getSlide(slideIndex)}>●</div>
                ))}
            </div>
            */}
        </div>

    )
};

export default ImageSlider;