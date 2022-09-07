import React, {useState, useEffect} from 'react'
import {ethers} from 'ethers'
import "./intro.css";

const Intro = () => {
    return (
        <>
            <div className='introContainer' id='introContainer'>
            <img src={require('../../images/UI_Notebook.png')} alt='ticket'></img>
            </div>
        </>
    );
}
export default Intro;
