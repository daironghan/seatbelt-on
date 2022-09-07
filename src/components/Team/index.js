import React, {useState, useEffect} from 'react'
import "./team.css";

const Team = () => {
    return (
        <>
            <div className='teamContainer' id='teamContainer'>
                <div className='teamLabelContainer'>
                    <img src={require('../../images/UI_2_Team_label.png')} alt='ticket'></img>
                </div>
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