import React, {useState, useEffect} from 'react'
import {ethers} from 'ethers'
import "./header.css";

const Header = () => {

	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	//const [connButtonText, setConnButtonText] = useState('Connect Wallet');
	const [provider, setProvider] = useState(null);

	const connectWalletHandler = () => {
        console.log("connect wallet btn")
		if (window.ethereum && defaultAccount == null) {
			// set ethers provider
			setProvider(new ethers.providers.Web3Provider(window.ethereum));

			// connect to metamask
			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				//setConnButtonText('Wallet Connected');
				setDefaultAccount(result[0]);
                console.log(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);
			});

		} else if (!window.ethereum){
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
        console.log(defaultAccount);
	}

    useEffect(() => {
        if(defaultAccount){
        provider.getBalance(defaultAccount)
        .then(balanceResult => {
            setUserBalance(ethers.utils.formatEther(balanceResult));
            console.log(ethers.utils.formatEther(balanceResult));
        })
        };
    }, [defaultAccount]);
	
	return (
        <>
		<div className='headerContainer' id='headerContainer'>
            <ul id="navlist">
                <li style={{float:'left'}} id="logo" className='headerItem'><a href='#headerContainer'></a></li>
                <li  className='headerItem'>
                    <button id="wallet" onClick={connectWalletHandler}></button>
                </li>
                <li id="opensea" className='headerItem'><a href="contact.asp"></a></li>
                <li id="twitter" className='headerItem'><a href="https://twitter.com/oseatbelt?s=11&t=PLKlEa57_vOAcgILg7NImw"></a></li>
            </ul>
        </div>

        </>
	);
}

export default Header;
        /*
        <div className='accountDisplay'>
            <h3>Address: {defaultAccount}</h3>
        </div>
        <div className='balanceDisplay'>
            <h3>Balance: {userBalance}</h3>
        </div>
        {errorMessage}
        */