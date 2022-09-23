import React, {useState, useEffect} from 'react'
import "./faqs.css";

const FAQs = () => {
    return (
        <>
        <link href='https://fonts.googleapis.com/css?family=Noto+Sans:400,700,400italic,700italic&subset=latin,latin-ext' rel='stylesheet' type='text/css' />

            <div className='faqsContainer' id='faqsContainer'>
                <div className='faqsLabelContainer'>
                    <img src={require('../../images/UI_2_FAQ_label.png')} alt='faqlabel'></img>
                </div>
                <div className='questionContainer'>
                    <div className='dropdown'>
                        <div className='question'>
                            What blockchain will <i>Seatbelt On!</i> reside on?
                            <div className='questionContent'>
                                <hr></hr>
                                <p><i>Seatbelt On!</i> will reside on the Etheruem(ETH) blockchain and use ERC-721A.</p>
                            </div>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <div className='question'>
                            When will <i>Seatbelt On!</i> launch?          
                            <div className='questionContent'>
                                <hr></hr>
                                <p><i>Seatbelt On!</i>'s launch process will begin 27 September(2022).</p>
                            </div>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <div className='question'>
                            How much is the <i>Seatbelt On!</i> Mint Price?
                            <div className='questionContent'>
                                <hr></hr>
                                <p>Mint Price is Free!(Max:1)
                                If you give <i>Seatbelt On!</i> as a present to your friend, both of you will get 1 <i>Seatbelt On!</i></p>
                            </div>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <div className='question'>
                            Could I mint more <i>Seatbelt On!</i> ? 
                            <div className='questionContent'>
                                <hr></hr>
                                <p>Sure. The mint price is 0.005, if you mint 5 <i>Seatbelt On!</i> in one time, The total of price is 0.02(1 free)</p>
                            </div>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <div className='question'>
                            Does <i>Seatbelt On!</i>  have a roadmap?
                            <div className='questionContent'>
                                <hr></hr>
                                <p>No. That's pure art. Maybe there are some interesting things in the future….</p>
                            </div>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <div className='question'>
                            How could I to get the Whitelist?
                            <div className='questionContent'>
                                <hr></hr>
                                <p>All holders of the projects we love can get whitelist! Those project are Kumo x World, ToriZero, Strangers, StreetLab, LonelyPop, Invisible Friends and Dino Babies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FAQs;