import React, {useState, useEffect} from 'react'
import "./team.css";

const Team = () => {
    return (
        <>  
            <link href='http://fonts.googleapis.com/css?family=Noto+Sans:400,700,400italic,700italic&subset=latin,latin-ext' rel='stylesheet' type='text/css' />
            <div className='teamIntroContainer'>
                <div className='teamLabelContainer'>
                        <img src={require('../../images/UI_2_Team_label.png')} alt='ticket'></img>
                        
                    </div>
                    <p>
                        "Seatbelt On! is a multi-field team. Mich as the art developer in this project hopes to express her love of going overseas and traveling through her illustrations. This project aims to bring back that feeling of having a trip or taking a flight to everyone, especially when the post-covid began.<br /><br />

                        Standing with Mich as the co-founder is Darren and a fantastic engineering group. As a team, we’re not only the TRUE believers in Web3 but also the travel lover in the real world. Read below to know more about us, and feel free to contact us.<br /><br />

                        Get tickets, and fly with us!"
                        </p>
                </div>
            <div className='teamContainer' id='teamContainer'>
                
                <div className='teamMemberContainer'>
                    <img src={require('../../images/UI_Photo.png')} alt='team' />
                    <img src={require('../../images/UI_Photo.png')} alt='team' />  
                    <img src={require('../../images/UI_Photo.png')} alt='team' />  
                    <img src={require('../../images/UI_Photo.png')} alt='team' />  
                    <img src={require('../../images/UI_Photo.png')} alt='team' />  
                    <img src={require('../../images/UI_Photo.png')} alt='team' />
                    <img src={require('../../images/UI_Photo.png')} alt='team' />  
                    <img src={require('../../images/UI_Photo.png')} alt='team' />  
                    <img src={require('../../images/UI_Photo.png')} alt='team' />  
                    <img src={require('../../images/UI_Photo.png')} alt='team' />
                </div>
            </div>
        </>
    );
}
export default Team;