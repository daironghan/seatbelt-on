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
                    <div className='memberContainer'>
                        <a href="https://twitter.com/michtsai13" target="_blank"><img src={require('../../images/Mich.png')}/></a>
                        <div className='member'>
                            <p id='memberName'>Mich Tsai</p>
                            <p id='memberRole'>Founder / Artist</p>
                        </div> 
                    </div>
                    <div className='memberContainer'>
                        <a href='https://twitter.com/darrenlu86'  target="_blank"><img src={require('../../images/Darren.png')} /></a>
                        <div className='member'>
                            <p id='memberName'>Darren Lu</p>
                            <p id='memberRole'>CoFounder / Handyman</p>
                        </div> 
                    </div>
                    <div className='memberContainer'>
                        <img src={require('../../images/Dairong.png')} />
                        <div className='member'>
                            <p id='memberName'>Dai-Rong Han</p>
                            <p id='memberRole'>Front-End Developer</p>
                        </div> 
                    </div>
                    <div className='memberContainer'>
                        <img src={require('../../images/Bonnnie.png')} />
                        <div className='member'>
                            <p id='memberName'>Bonnie</p>
                            <p id='memberRole'>Back-End Developer</p>
                        </div> 
                    </div>
                    <div className='memberContainer'>
                        <img src={require('../../images/湘菱.png')} />
                        <div className='member'>
                            <p id='memberName'>湘菱</p>
                            <p id='memberRole'>Back-End Developer</p>
                        </div> 
                    </div>
                    <div className='memberContainer'>
                        <img src={require('../../images/Evan.png')} />
                        <div className='member'>
                            <p id='memberName'>Evan</p>
                            <p id='memberRole'>Mascot</p>
                        </div> 
                    </div>
                    <div className='memberContainer'>
                        <img src={require('../../images/祐麟.png')} />
                        <div className='member'>
                            <p id='memberName'>祐麟</p>
                            <p id='memberRole'>Mascot</p>
                        </div> 
                    </div>
{/*                   
                    <img src={require('../../images/UI_Photo.png')} alt='team' />  
                    <img src={require('../../images/UI_Photo.png')} alt='team' />  
                    <img src={require('../../images/UI_Photo.png')} alt='team' />  
                    <img src={require('../../images/UI_Photo.png')} alt='team' />  
                    <img src={require('../../images/UI_Photo.png')} alt='team' />
                    <img src={require('../../images/UI_Photo.png')} alt='team' />   */}
                </div>
            </div>
        </>
    );
}
export default Team;