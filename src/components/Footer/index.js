import React from 'react'
import "./footer.css";

const Footer = () => {
	return (
        <>
		<div className='footerContainer'>
            <ul id="navlist">
                <li style={{float:'left'}} id="logo" className='footerItem'><a href="default.asp"></a></li>
                <li id="opensea" className='footerItem'><a href="contact.asp"></a></li>
                <li id="twitter" className='footerItem'><a href="https://twitter.com/oseatbelt?s=11&t=PLKlEa57_vOAcgILg7NImw"></a></li>
                <li id="rights" className='footerItem'></li>
            </ul>
        </div>

        </>
	);
}

export default Footer;
