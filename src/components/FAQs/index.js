import React, {useState, useEffect} from 'react'
import "./faqs.css";

const FAQs = () => {
    return (
        <>
            <div className='faqsContainer' id='faqsContainer'>
                <div className='faqsLabelContainer'>
                    <img src={require('../../images/UI_2_FAQ_label.png')} alt='faqlabel'></img>
                </div>
                <div className='questionContainer'>
                    <div className='dropdown'>
                        <div className='question'>
                            When will Seatbelt On be launched?
                            <div className='questionContent'>
                                <hr></hr>
                                <p>Seatbelt On will begin launching on September 27th 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <div className='question'>
                            When will Seatbelt On be launched?
                            <div className='questionContent'>
                                <hr></hr>
                                <p>Seatbelt On will begin launching on September 27th 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <div className='question'>
                            When will Seatbelt On be launched?
                            <div className='questionContent'>
                                <hr></hr>
                                <p>Seatbelt On will begin launching on September 27th 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <div className='question'>
                            When will Seatbelt On be launched?
                            <div className='questionContent'>
                                <hr></hr>
                                <p>Seatbelt On will begin launching on September 27th 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <div className='question'>
                            When will Seatbelt On be launched?
                            <div className='questionContent'>
                                <hr></hr>
                                <p>Seatbelt On will begin launching on September 27th 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FAQs;