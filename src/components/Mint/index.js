import React, {useState, useEffect} from 'react'
import {ethers, utils} from 'ethers'
import "./mint.css";
import abi from '../abi.json';
import CountdownTimer from './CountdownTimer';
// import { keccak256 } from "@ethersproject/keccak256";
// import { toUtf8Bytes } from "@ethersproject/strings";


const Mint = () => {

    // const keccak256 = require('keccak256')
    //const buf2hex = x => '0x' + x.toString('hex')
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [provider, setProvider] = useState(null);
    const [mintAmount, setMintAmount] = useState("1");
    const contractAddress = "0xa261C11aCa152da4dA61aaaEb0a44cE83af6bE34";
    const [seatsLeft, setSeatsLeft] = useState(3333);
    const [disable, setDisable] = useState(true);
    
    const launchDate = new Date("2022/9/18 10:34:00");
    const luanchWhite = new Date("2022/9/17 14:11:00");
    
    const mintHandler = async () => {
        try {
            if (window.ethereum) {
                
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const nftContract = new ethers.Contract(contractAddress, abi, signer);
                const mintPrice = 0.005*mintAmount;
                console.log("Initializing payment");
                console.log(mintPrice)
                //whitelist
                
                
                if(new Date(luanchWhite).getTime() < new Date().getTime()) {
                    console.log("whitelist");
                    const test = "0xd0eF59F1cD8D5CF833dD49346D81E62A4b67E98e";
                    //create proof
                    // console.log(keccak256(toUtf8Bytes(test)));
                    console.log(utils.keccak256(utils.toUtf8Bytes("example")))
                    const proof = ["0xe3070ae6f7e6d30642a10bf83c36cf756d00ceb61081ef8bf200feeb8d561e2d","0x5f244ac628663bf73532f83dbf0a8cf2d2b169e3efb532712bedf456c6f6f040","0x3493838b58a646fdb14b2d9a652fae9e7a166c0ef3c9ab72b342000d23f04dc5","0x5712507eeb3d7b48e5876f21fc871656c2379464b480c8e89c50c2a1e8f58ac5","0x538698e669c6b633f2764614f41c448da80c79b14dd365802476865eca9c766b"];
                    let mintTransaction = await nftContract.mintAllowList(  proof, mintAmount,  { value: ethers.utils.parseEther(`${mintPrice}`) });
                    console.log("Please wait");
                    await mintTransaction.wait();
                    console.log(`Success, view transaction: https://rinkeby.etherscan.io/tx/${mintTransaction.hash}`);
                    window.location.reload(false);
                } else {
                    
                    let mintTransaction = await nftContract.mintPublic(mintAmount, { value: ethers.utils.parseEther(`${mintPrice}`) });
                    console.log("Please wait");
                    await mintTransaction.wait();
                    console.log(`Success, view transaction: https://rinkeby.etherscan.io/tx/${mintTransaction.hash}`);
                    window.location.reload(false);
                }          
            }
        } catch (error) {
            console.log(error);
            console.log("Please check if Metamask wallet is connected")
        }
    }
    const radioHandler = async (e) => {
        setMintAmount(e.target.value);
    }

    // function keccak256(data) {
    //     return '0x' + sha3.keccak_256(arrayify(data));
    // }

    useEffect (() => {

        if(window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts'})
            .then(result => {
                setDefaultAccount(result[0]);
                //console.log(result[0]);
            })
        }
        //whitelist script
        /*
        const script = document.createElement("script")
        script.src = "https://cdn.jsdelivr.net/npm/merkletreejs@latest/merkletree.js"
        document.body.appendChild(script)
        const script2 = document.createElement("script2")
        script2.src = "https://cdn.jsdelivr.net/npm/keccak256@latest/keccak256.js"
        document.body.appendChild(script2)
*/
        if( new Date(launchDate).getTime() < new Date().getTime()) {
            setDisable(false);
        }else {
            setDisable(true);
        }

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
            <link href='https://fonts.googleapis.com/css?family=Noto+Sans:400,700,400italic,700italic&subset=latin,latin-ext' rel='stylesheet' type='text/css' />

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
