import React from 'react'
import "./footer.css";

const Footer = () => {
	return (
        <>
		<div className='footerContainer'>
            <ul id="navlist">
                <li style={{float:'left'}} id="logoFooter" className='footerItem'><a href='#headerContainer'></a></li>
                <li id="openseaFooter" className='footerItem'><a href="https://opensea.io/zh-TW/collection/seatbelt-on" target="_blank"></a></li>
                <li id="twitterFooter" className='footerItem'><a href="https://twitter.com/oseatbelt?s=11&t=PLKlEa57_vOAcgILg7NImw"  target="_blank"></a></li>
                <li id="rights" className='footerItem'></li>
            </ul>
        </div>

        </>
	);
}

export default Footer;
