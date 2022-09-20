import React, {useState, useEffect} from 'react'
import "./sneakpeak.css";
import ImageSlider from "./ImageSlider";
const Sneakpeak = () => {
    /*
    const sildesUrl = ["../../../public/images/3028.png", "../../../public/images/3051.png", "../../../public/images/3111.png"]
    const slides = sildesUrl.map (url => {
        let img = new Image();
        img.src = url;
        return img;
    })*/

    
    const slides = [
        {url: "https://seatbelt-on.com/images/3051.png"},
        {url: "https://seatbelt-on.com/images/3028.png"},
        {url: "https://seatbelt-on.com/images/3111.png"}
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