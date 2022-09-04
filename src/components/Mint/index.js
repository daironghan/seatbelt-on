import React, {useState, useEffect} from 'react'
import {ethers} from 'ethers'
import "./mint.css";

const Mint = () => {
    return (
        <>
            <div className='mintContainer'>
                <img src={require('../../images/UI_Ticket1.png')} alt='ticket'></img>
                <button>Mint</button>
            </div>
        </>
    );
}
export default Mint;
