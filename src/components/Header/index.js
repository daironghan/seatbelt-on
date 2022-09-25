import React, {useState, useEffect} from 'react'
import {ethers} from 'ethers'
import "./header.css";

const Header = () => {

	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	//const [connButtonText, setConnButtonText] = useState('Connect Wallet');
	const [provider, setProvider] = useState(null);
    const [walletAddress, setWalletAddress] = useState("");
    const [walletStyle, setWalletStyle] = useState("wallet");

	const connectWalletHandler = () => {
        //console.log("connect wallet btn")

		if (window.ethereum && window.ethereum.isMetaMask) {
			// set ethers provider
			setProvider(new ethers.providers.Web3Provider(window.ethereum));

			// connect to metamask
			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
                accountChangedHandler(result[0])
                setDefaultAccount(result[0])
			})
			.catch(error => {
				setErrorMessage(error.message);
			});

		} else if (!window.ethereum){
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        if(newAccount!==null && newAccount.length!==0) {
            const backText = newAccount.toString().slice(38,42)
            const addressText = newAccount.toString().slice(0,5).concat("...", backText)
            
            setWalletAddress(addressText);
            setWalletStyle("walletAddress")
        } else {
            setWalletStyle("wallet");
            setWalletAddress("");
        } 
            
    }

    const chainChangedHandler = (chainID) => {
        
        console.log("Please stay on eth chain.")
    }

    if(window.ethereum) {
        window.ethereum.on('accountsChanged', accountChangedHandler);
        window.ethereum.on('chainChanged', (chainID) => {
            chainChangedHandler(chainID);
        });
    }


    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(result => {
                    setDefaultAccount(result[0]);
                    accountChangedHandler(result[0])
                })
        }
    }, [])

    /*
    useEffect(() => {
        if(defaultAccount!==null){
        provider.getBalance(defaultAccount)
        .then(balanceResult => {
            setUserBalance(ethers.utils.formatEther(balanceResult));
            console.log(ethers.utils.formatEther(balanceResult));
        })
        };
    }, [defaultAccount]);*/
	
	return (
        <>
        <link href='https://fonts.googleapis.com/css?family=Noto+Sans:400,700,400italic,700italic&subset=latin,latin-ext' rel='stylesheet' type='text/css' />
		<div className='headerContainer' id='headerContainer'>
            <ul id="navlist">
                <li style={{float:'left'}} id="logo" className='headerItem'><a href='#headerContainer'></a></li>
                <li  className='headerItem'>
                    <button  id={walletStyle} onClick={connectWalletHandler}>{walletAddress}</button>
                </li>
                <li id="opensea" className='headerItem'><a href="contact.asp"></a></li>
                <li id="twitter" className='headerItem'><a href="https://twitter.com/oseatbelt?s=11&t=PLKlEa57_vOAcgILg7NImw"  target="_blank"></a></li>
            </ul>
        </div>

        </>
	);
}

export default Header;