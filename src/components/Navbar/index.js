import React, {useState, useEffect} from 'react'
import {ethers} from 'ethers'
import "./navbar.css";

const Navbar = () => {
    return (
        <>
            <div className='navbarContainer'>
                 <ul>
                    <li id="mint" className='navItem'><a href=''></a></li>
                    <li id="intro" className='navItem'><a href=''></a></li>
                    <li id="feature" className='navItem'><a href=''></a></li>
                    <li id="sneakpeak" className='navItem'><a href=''></a></li>
                    <li id="team" className='navItem'><a href=''></a></li>
                    <li id="faqs" className='navItem'><a href=''></a></li>
                 </ul>
            </div>
        </>
    );
}
export default Navbar;