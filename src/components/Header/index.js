import React, {useState, useEffect} from 'react'
import {ethers} from 'ethers'
import "./index.css";
//import './WalletCard.css'

const Header = () => {

	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	//const [connButtonText, setConnButtonText] = useState('Connect Wallet');
	const [provider, setProvider] = useState(null);

	const connectWalletHandler = () => {
		if (window.ethereum && defaultAccount == null) {
			// set ethers provider
			setProvider(new ethers.providers.Web3Provider(window.ethereum));

			// connect to metamask
			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				//setConnButtonText('Wallet Connected');
				setDefaultAccount(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);
			});

		} else if (!window.ethereum){
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

    useEffect(() => {
        if(defaultAccount){
        provider.getBalance(defaultAccount)
        .then(balanceResult => {
            setUserBalance(ethers.utils.formatEther(balanceResult));
        })
        };
    }, [defaultAccount]);
	
	return (
        <>
		<div className='navbarContainer'>
            <ul id="navlist">
                <li style={{float:'left'}} id="logo"><a href="default.asp"></a></li>
                <li>
                    <button id="wallet" onClick={connectWalletHandler}></button>
                </li>
                <li id="opensea"><a href="contact.asp"></a></li>
                <li id="twitter"><a href="https://twitter.com/oseatbelt?s=11&t=PLKlEa57_vOAcgILg7NImw"></a></li>
            </ul>
        </div>
        <div className='accountDisplay'>
            <h3>Address: {defaultAccount}</h3>
        </div>
        <div className='balanceDisplay'>
            <h3>Balance: {userBalance}</h3>
        </div>
        {errorMessage}
        </>
	);
}

export default Header;
/*<button id="wallet" onClick={connectWalletHandler}>{connButtonText}</button>*/