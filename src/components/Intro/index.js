import React, {useState, useEffect} from 'react'
import {ethers} from 'ethers'
import "./intro.css";

const Intro = () => {
    return (
        <>
            <link href='https://fonts.googleapis.com/css?family=Noto+Sans:400,700,400italic,700italic&subset=latin,latin-ext' rel='stylesheet' type='text/css' />
            <div className='introContainer' id='introContainer'>
                <img src={require('../../images/UI_Notebook.png')} alt='ticket'></img>
                <p id='introText'>"To celebrate the WorldTourismDay, the illustrator @michtsai13 decided to choose ‘TRAVEL’ as the topic to become an NFT project. That’s cus we both love to travel. Also, some people might miss the feeling of taking a trip as much as us since the pandemic began!<br /><br />
                World Tourism Day has been held on 27 September each year since 1980. The date marks the anniversary of the adoption of the Statutes of the Organization in 1970, paving the way for the establishment of UNWTO five years later."  </p>
                <p id='featureText'>"We have no roadmap, no discord, just want everybody to chill out and have an easy trip :heart:. The Seatbelt On! series include over 20 attractions, 14 emoticons, 10 hairstyles and 30 clothes and accessories.<br /><br />
                Which country you’d like to visit? Japan, USA, Iceland, UK or Taiwan? What kind of clothes do you fancy to dress? Blazer, Halter Top, Beach Shorts or Cross-legs Skirt?<br /><br />
                We hope you can find something interesting during the trip.<br />
                OK! Seatbelt on! Make your choice, and let’s depart!
                ".</p>
            </div>
        </>
    );
}
export default Intro;
