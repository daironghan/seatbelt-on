import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from '../../hooks/useCountdown';
import "./Mint.css";
import {useState, useEffect} from 'react'
import {ethers, BigNumber, utils} from 'ethers'
import abi from '../abi.json';
import MerkleTree from 'merkletreejs';
import { keccak256 } from 'ethers/lib/utils';

const ExpiredNotice = () => {

  const buf2hex = x => '0x' + x.toString('hex')
  const { addresses } = require("./Whitelist.js");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [receiverAddress, setReceiverAddress] = useState("0x0000000000000000000000000000000000000000");
  const [userBalance, setUserBalance] = useState(null);
  const [provider, setProvider] = useState(null);
  const [mintAmount, setMintAmount] = useState(1);
  const contractAddress = "0xAeD7347be8Fdfd81dc2EeD31F77d0B95debF46C3";  /*contract*/
  const [seatsLeft, setSeatsLeft] = useState(3333);
  const launchDate = new Date("2022/9/23 18:00:00"); /*change*/

  const freeMintHandler = async () => {
      try {
          if (window.ethereum) {
          
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const nftContract = new ethers.Contract(contractAddress, abi, signer);
            const mintPrice = 0;
            console.log("Initializing payment");
            console.log(mintPrice)
            console.log(receiverAddress)
            if (new Date(launchDate).getTime() < new Date().getTime()) {
                console.log("public")
                let mintTransaction = await nftContract.mintGive(receiverAddress, { value: ethers.utils.parseEther(`${mintPrice}`) });
                console.log("Please wait");
                await mintTransaction.wait();
                console.log(`Success, view transaction: https://rinkeby.etherscan.io/tx/${mintTransaction.hash}`);
                window.location.reload(false);
            } else {
                console.log("whitelist");
                const leaves = addresses.map(x => utils.keccak256(x))
                const tree = new MerkleTree(leaves, keccak256, {sortPairs: true})
                console.log(defaultAccount)
                const da = defaultAccount.toString();
                const leaf = utils.keccak256(da);
                const proof = tree.getProof(leaf).map(x => buf2hex(x.data));
                let mintTransaction = await nftContract.mintGiveWhitelist(receiverAddress, proof, { value: ethers.utils.parseEther(`${mintPrice}`) });
                console.log("Please wait");
                await mintTransaction.wait();
                console.log(`Success, view transaction: https://rinkeby.etherscan.io/tx/${mintTransaction.hash}`);
                window.location.reload(false);
            }
          }
      } catch (error) {
          //console.log("Please check if Metamask wallet is connected and reciever wallet address is valid")
          //console.log(error);
            setIsAlertVisible(true);
            setErrorMessage(error.reason);
            setTimeout(() => {
                setIsAlertVisible(false);
            }, 3000);
      }
  }

  const receiverHandler = (e) => {
    //console.log(e.target.value);
    setReceiverAddress(e.target.value);
    if(e.target.value.trim().length === 0){
      setReceiverAddress("0x0000000000000000000000000000000000000000");
    }
    //console.log("ra", receiverAddress)
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
  }, []);

  useEffect(() => {
    
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const nftContract = new ethers.Contract(contractAddress, abi, provider);
        const fetchData = async () => {
            let bg = await nftContract.totalSupply();
            const sleft = 3333-Number(bg);
            setSeatsLeft(sleft);
        }
        // call the function
        fetchData()

    
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const nftContract = new ethers.Contract(contractAddress, abi, provider);
        const fetchData = async () => {
            let bg = await nftContract.totalSupply();
            const sleft = 3333 - Number(bg);
            setSeatsLeft(sleft);
        }

        fetchData()

    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="expired-notice">
      {isAlertVisible && 
                  <div className='freeErrorContainer'>
                      {errorMessage}
                  </div>}
      <img id='freeTicket' src={require('../../images/UI_3_Ticket2.png')} alt='ticket'></img> 
      <div className='freeMintContainer'>
        <p className='boardingTime'>2022/9/27 16:00:00</p>
        <p className='seatsLeft'>{seatsLeft}/3333</p>
        <input id='freeReciever' onChange={receiverHandler} value={receiverAddress}></input>
        <button onClick={freeMintHandler} id='freeMintBtn'></button>
      </div>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {

  const contractAddress = "0xAeD7347be8Fdfd81dc2EeD31F77d0B95debF46C3"; /*contract*/
  const [seatsLeft, setSeatsLeft] = useState(3333);
  
  useEffect (() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
        const nftContract = new ethers.Contract(contractAddress, abi, provider);  /*abi*/
        const fetchData = async () => {
            let bg = await nftContract.totalSupply();
            const sleft = 3333 - Number(bg);
            setSeatsLeft(sleft);
        }

        fetchData()
  }, []);

  return (
    <div className="show-counter">

        <img id='freeTicket' src={require('../../images/UI_3_Ticket1.png')} alt='ticket'></img> 
        <div className='counterContainer'>
          <p className='boardingTime'>2022/9/27 16:00:00</p>
          <p className='seatsLeft'>{seatsLeft}/3333</p>
          <div className='countUnitContainer'>
            <div className='counter-unit'>{days}</div>
            <div className='counter-unit'>{hours}</div>
            <div className='counter-unit'>{minutes}</div>
            <div className='counter-unit'>{seconds}</div>
          </div>
        </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if(days + hours + minutes + seconds === 0) {
    window.location.reload();
  }
  // if (days + hours + minutes + seconds <= 0) {
  //   return <ExpiredNotice />
  // } else {
  //   return (
  //     <ShowCounter
  //       days={days}
  //       hours={hours}
  //       minutes={minutes}
  //       seconds={seconds}
  //     />
  //   );
  // }
  return (days + hours + minutes + seconds <= 0)
          ? <ExpiredNotice />
          : <ShowCounter
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
            />;
};

export default CountdownTimer;
/*
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />*/