import React, {useState, useEffect} from 'react'
import {ethers} from 'ethers'
import "./intro.css";

const Intro = () => {
    return (
        <>
            <link href='http://fonts.googleapis.com/css?family=Noto+Sans:400,700,400italic,700italic&subset=latin,latin-ext' rel='stylesheet' type='text/css' />
            <div className='introContainer' id='introContainer'>
                <img src={require('../../images/UI_Notebook.png')} alt='ticket'></img>
                <p id='introText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p id='featureText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
            </div>
        </>
    );
}
export default Intro;
