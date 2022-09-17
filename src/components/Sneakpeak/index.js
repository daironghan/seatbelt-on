import React, {useState, useEffect} from 'react'
import "./sneakpeak.css";
import ImageSlider from "./ImageSlider";
const Sneakpeak = () => {
    const slides = [
        {url: "http://localhost:3000/images/3028.png"},
        {url: "http://localhost:3000/images/3051.png"},
        {url: "http://localhost:3000/images/3111.png"}
    ];
    return (
        <>
            <div className='sneakpeakContainer' id='sneakpeakContainer'>
                <div className = 'sliderContainer'>
                    <ImageSlider slides={slides} />
                </div>
            </div>
        </>
    );
}
export default Sneakpeak;