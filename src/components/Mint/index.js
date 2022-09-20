import React, { useState, useEffect } from 'react'
import { ethers, utils } from 'ethers'
import "./mint.css";
import abi from '../abi.json';
import CountdownTimer from './CountdownTimer';
import MerkleTree from 'merkletreejs';
import { keccak256 } from 'ethers/lib/utils';

// import { keccak256 } from "@ethersproject/keccak256";
// import { toUtf8Bytes } from "@ethersproject/strings";

const Mint = () => {

    // const keccak256 = require('keccak256')
    const buf2hex = x => '0x' + x.toString('hex')
    const { addresses } = require("./Whitelist.js");
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
                const mintPrice = 0.005 * mintAmount;
                console.log("Initializing payment");
                console.log(mintPrice)
                //whitelist
                //console.log(defaultAccount)

                if (new Date(luanchWhite).getTime() < new Date().getTime()) {
                    console.log("whitelist");
                    const leaves = addresses.map(x => utils.keccak256(x))
                    const tree = new MerkleTree(leaves, keccak256, {sortPairs: true})
                    const da = defaultAccount.toString();
                    //console.log("da", da)
                    const leaf = utils.keccak256(da);
                    //console.log(leaf)
                    const proof = tree.getProof(leaf).map(x => buf2hex(x.data));
                    //console.log(proof)
                    let mintTransaction = await nftContract.mintAllowList(proof, mintAmount, { value: ethers.utils.parseEther(`${mintPrice}`) });
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

    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
    }
    window.ethereum.on('accountsChanged', accountChangedHandler);

    useEffect(() => {

        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(result => {
                    setDefaultAccount(result[0]);
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
        if (new Date(launchDate).getTime() < new Date().getTime()) {
            setDisable(false);
        } else {
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
                            <input className='radioBtn' type="radio" value="1" onChange={radioHandler} name="num" checked={(mintAmount == "1")} />
                            <div className='radioTile'>
                                <label htmlFor="1">1</label>
                            </div>
                        </div>
                        <div className='inputContainer'>
                            <input className='radioBtn' type="radio" value="2" onChange={radioHandler} name="num" checked={(mintAmount == "2")} />
                            <div className='radioTile'>
                                <label htmlFor="2">2</label>
                            </div>
                        </div>
                        <div className='inputContainer'>
                            <input className='radioBtn' type="radio" value="3" onChange={radioHandler} name="num" checked={(mintAmount == "3")} />
                            <div className='radioTile'>
                                <label htmlFor="3">3</label>
                            </div>
                        </div>
                        <div className='inputContainer'>
                            <input className='radioBtn' type="radio" value="4" onChange={radioHandler} name="num" checked={(mintAmount == "4")} />
                            <div className='radioTile'>
                                <label htmlFor="4">4</label>
                            </div>
                        </div>
                        <div className='inputContainer'>
                            <input className='radioBtn' type="radio" value="5" onChange={radioHandler} name="num" checked={(mintAmount == "5")} />
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
