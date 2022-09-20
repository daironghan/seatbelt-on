import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from '../../hooks/useCountdown';
import "./Mint.css";
import {useState, useEffect} from 'react'
import {ethers, BigNumber} from 'ethers'
import abi from '../abi.json';
const ExpiredNotice = () => {

  const [errorMessage, setErrorMessage] = useState(null);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [receiverAddress, setReceiverAddress] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [provider, setProvider] = useState(null);
  const [mintAmount, setMintAmount] = useState(1);
  const contractAddress = "0xa261C11aCa152da4dA61aaaEb0a44cE83af6bE34";
  const [seatsLeft, setSeatsLeft] = useState(3333);

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
            let nftMint = await nftContract.mintGive(receiverAddress, { value: ethers.utils.parseEther(`${mintPrice}`) });
            console.log("Please wait");
            await nftMint.wait();
            console.log(`Success, view transaction: https://rinkeby.etherscan.io/tx/${nftMint.hash}`);
            window.location.reload(false);
          }
      } catch (error) {
          //console.log("Please check if Metamask wallet is connected and reciever wallet address is valid")
          setIsAlertVisible(true);
            setErrorMessage(error.reason);
            setTimeout(() => {
                setIsAlertVisible(false);
            }, 3000);
      }
  }

  const receiverHandler = (e) => {
    setReceiverAddress(e.target.value);
  }
/*
  useEffect(() => {
    if(defaultAccount){
    provider.getBalance(defaultAccount)
    .then(balanceResult => {
        setUserBalance(ethers.utils.formatEther(balanceResult));
        console.log(ethers.utils.formatEther(balanceResult));
    })
    };
  }, [defaultAccount]); */
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

  return (
    <div className="expired-notice">
      {isAlertVisible && 
                  <div className='errorContainer'>
                      {errorMessage}
                  </div>}
      <img id='freeTicket' src={require('../../images/UI_3_Ticket2.png')} alt='ticket'></img> 
      <div className='freeMintContainer'>
        <p className='boardingTime'>2022/9/27 00:00:00</p>
        <p className='seatsLeft'>{seatsLeft}/3333</p>
        <input id='freeReciever' onChange={receiverHandler} ></input>
        <button onClick={freeMintHandler} id='freeMintBtn'></button>
      </div>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {

  const contractAddress = "0xa261C11aCa152da4dA61aaaEb0a44cE83af6bE34";
  const [seatsLeft, setSeatsLeft] = useState(3333);
  
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
    <div className="show-counter">

        <img id='freeTicket' src={require('../../images/UI_3_Ticket1.png')} alt='ticket'></img> 
        <div className='counterContainer'>
          <p className='boardingTime'>2022/9/27 00:00:00</p>
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