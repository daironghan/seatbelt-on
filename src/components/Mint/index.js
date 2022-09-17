import React, {useState, useEffect} from 'react'
import {ethers, BigNumber} from 'ethers'
import "./mint.css";
import abi from '../abi.json';
import CountdownTimer from './CountdownTimer';



const Mint = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [provider, setProvider] = useState(null);
    const [mintAmount, setMintAmount] = useState("1");
    const contractAddress = "0xa261C11aCa152da4dA61aaaEb0a44cE83af6bE34";
    const [seatsLeft, setSeatsLeft] = useState(3333);
    const [disable, setDisable] = useState(true);
    //const LAUNCH_MS = 0 * 1000;
    const LAUNCH_MS = new Date("2022/9/17 11:49:00");
    //const NOW_MS = new Date().getTime();
    const launchDate = LAUNCH_MS;

    /*
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
	}*/
    
    const mintHandler = async () => {
        try {
            if (window.ethereum) {
                    console.log("mint");
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const signer = provider.getSigner();
                    const nftContract = new ethers.Contract(contractAddress, abi, signer);
                    const mintPrice = 0.005*mintAmount;
                    console.log("Initializing payment");
                    console.log(mintPrice)
                    let nftMint = await nftContract.mintPublic(mintAmount, { value: ethers.utils.parseEther(`${mintPrice}`) });
                    console.log("Please wait");
                    await nftMint.wait();
                    console.log(`Success, view transaction: https://rinkeby.etherscan.io/tx/${nftMint.hash}`);
                    window.location.reload(false);
            }
        } catch (error) {
            console.log(error);
            console.log("Please check if Metamask wallet is connected")
        }
    }
    const radioHandler = async (e) => {
        setMintAmount(e.target.value);
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


    useEffect(() => {
        if (performance.navigation.type === 1) {
            
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const nftContract = new ethers.Contract(contractAddress, abi, provider);
            const fetchData = async () => {
                let bg = await nftContract.totalSupply();
                const sleft = 3333 - Number(bg);
                setSeatsLeft(sleft);
            }

            fetchData()
            
            if( new Date(launchDate).getTime() < new Date().getTime()) {
                setDisable(false);
            }else {
                setDisable(true);
            }
        }
      },[]);

    useEffect (() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
            const nftContract = new ethers.Contract(contractAddress, abi, provider);
            const fetchData = async () => {
                let bg = await nftContract.totalSupply();
                const sleft = 3333 - Number(bg);
                setSeatsLeft(sleft);
            }

            fetchData()
    }, []);

    return (
        <>  
            <link href='http://fonts.googleapis.com/css?family=Noto+Sans:400,700,400italic,700italic&subset=latin,latin-ext' rel='stylesheet' type='text/css' />
            <div className='mintContainer' id='mintContainer'>
                
                
                <CountdownTimer targetDate={launchDate} />
                <img id='mintTicket' src={require('../../images/UI_3_Ticket3.png')} alt='mintTicket'></img>
                <div className='publicMintContainer'>
                    <p className='boardingTime'>2022/9/27 00:00:00</p>
                    <p className='seatsLeft'>{seatsLeft}/3333</p>
                    <div className='radioContainer'>
                        <div className='inputContainer'>
                            <input className='radioBtn' type="radio" value="1" onChange={radioHandler} name="num"  checked={(mintAmount == "1")}/>
                            <div className='radioTile'>
                                <label htmlFor="1">1</label>
                            </div>
                        </div>
                        <div className='inputContainer'>
                            <input  className='radioBtn' type="radio" value="2" onChange={radioHandler} name="num"  checked={(mintAmount == "2")}/>
                            <div className='radioTile'>
                                <label htmlFor="2">2</label>
                            </div>
                        </div>
                        <div className='inputContainer'>
                            <input  className='radioBtn' type="radio" value="3" onChange={radioHandler} name="num"  checked={(mintAmount == "3")}/>
                            <div className='radioTile'>
                                <label htmlFor="3">3</label>
                            </div>
                        </div>
                        <div className='inputContainer'>
                            <input className='radioBtn' type="radio" value="4" onChange={radioHandler} name="num"  checked={(mintAmount == "4")}/>
                            <div className='radioTile'>
                                <label htmlFor="4">4</label>
                            </div>
                        </div>
                        <div className='inputContainer'>
                            <input  className='radioBtn' type="radio" value="5" onChange={radioHandler} name="num"  checked={(mintAmount == "5")}/>
                            <div className='radioTile'>
                                <label htmlFor="5">5</label>
                            </div>
                        </div>
                    </div>

                    <button onClick={mintHandler} id='mintBtn' disabled={disable}></button>
                </div>
            </div>
        </>
    );
}
export default Mint;
