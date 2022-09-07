import React, {useState, useEffect} from 'react'
import {ethers, BigNumber} from 'ethers'
import "./mint.css";
import abi from '../abi.json';



const Mint = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [provider, setProvider] = useState(null);
    const [mintAmount, setMintAmount] = useState(1);
    const contractAddress = "0xD7bA7E7cE5B91D86A0cBb77a477C54DFCfd0d333";
   
    
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
	}

    const mintHandler = async () => {
        try {
            if (window.ethereum) {
                if(defaultAccount == null){
                    console.log('Please connect Metamask wallet first');
                }
                else {
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const signer = provider.getSigner();
                    const nftContract = new ethers.Contract(contractAddress, abi, signer);
                    console.log("initialize payment");
                    let nftMint = await nftContract.mintPublic(1, { value: ethers.utils.parseEther("0.005") });
                    console.log("please wait");
                    await nftMint.wait();
                    console.log(`Success, view transaction: https://rinkeby.etherscan.io/tx/${nftMint.hash}`);
                }
            }
        } catch (error) {
            console.log(error);
        }
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
            <div className='mintContainer' id='mintContainer'>
                <img id='ticket' src={require('../../images/UI_Ticket1.png')} alt='ticket'></img>
                <button onClick={mintHandler} id='mintBtn'></button>
            </div>
        </>
    );
}
export default Mint;
