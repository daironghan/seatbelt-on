import React, {useState, useEffect} from 'react'
import "./faqs.css";

const FAQs = () => {
    return (
        <>
        <link href='http://fonts.googleapis.com/css?family=Noto+Sans:400,700,400italic,700italic&subset=latin,latin-ext' rel='stylesheet' type='text/css' />

            <div className='faqsContainer' id='faqsContainer'>
                <div className='faqsLabelContainer'>
                    <img src={require('../../images/UI_2_FAQ_label.png')} alt='faqlabel'></img>
                </div>
                <div className='questionContainer'>
                    <div className='dropdown'>
                        <div className='question'>
                            What blockchain will Seatbelt On! reside on?
                            <div className='questionContent'>
                                <hr></hr>
                                <p>Seatbelt On! will reside on the Etheruem（ETH）blockchain and use ERC-721A.</p>
                            </div>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <div className='question'>
                            When will Seatbelt On! launch?          
                            <div className='questionContent'>
                                <hr></hr>
                                <p>SeatBelt On!’s launch process will begin 27 September(2022).</p>
                            </div>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <div className='question'>
                            How much is the Seatbelt On!  Mint Price？
                            <div className='questionContent'>
                                <hr></hr>
                                <p>"Mint Price is Free！（Max:1）
                                If you give Seatbelt On! as a present to your friend, both of you will get 1 Seatbelt On!"</p>
                            </div>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <div className='question'>
                            Could I mint more Seatbelt On! ? 
                            <div className='questionContent'>
                                <hr></hr>
                                <p>Sure. The mint price is 0.005, if you mint 5 Seatbelt On! in one time, The total of price is 0.02(1 free)</p>
                            </div>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <div className='question'>
                            Does Seatbelt On!  have a roadmap?
                            <div className='questionContent'>
                                <hr></hr>
                                <p>No. That’s pure art. Maybe there are some interesting things in the future….</p>
                            </div>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <div className='question'>
                            How could I to get the Whitelist?
                            <div className='questionContent'>
                                <hr></hr>
                                <p>All holders of the projects we love can get whitelist！Those project are Kumo x World, ToriZero, Strangers, StreetLab, LonelyPop, Invisible Friends and Dino Babies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FAQs;