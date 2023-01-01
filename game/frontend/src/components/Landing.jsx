

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Link
}  from "react-router-dom";
import {useState, useEffect} from 'react'
import Navbar from './Navbar';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk'
import Web3 from 'web3'
import './PresentRoomStyles.css'
import Chat from "./Chat";
// import "../components/Chat.css"
import io from "socket.io-client";
import SocketContext from "./SocketContext";

import { landing_bg } from '../assets';


function Landing () {

    const navigate = useNavigate();
    // const { socket } = useSocket();
    const [walletAddress, setWalletAddress] = useState("Get Started");
    const [isPresentModelOpen, setIsPresentModelOpen] = useState(false);
    const [isFutureModelOpen, setIsFutureModelOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
    
    const socket = useContext(SocketContext);
    console.log("socket",socket);
    useEffect(() => {
        
        
      }, []);
    const joinRoom = () => {
       
        if (username !== "" && room !== "") {
         socket.emit("join_room", room);
         
          setShowChat(true);
          const obj = {
            name:"abhishek",
            age:21
          }
          //navigate('/present', { state: { data:obj } });
      
        //console.log(socket)

        }
        
      };

      // const handleModelClose = () => {
      //   setIsPresentModelOpen(false);
      //   set
      // };
    
      

const APP_NAME = 'My Awesome App'
const APP_LOGO_URL = 'https://example.com/logo.png'
const DEFAULT_ETH_JSONRPC_URL = `https://${process.env.NODE_USERNAME}:${process.env.NODE_PASSWORD}@mainnet.ethereum.coinbasecloud.net`
const DEFAULT_CHAIN_ID = 1

// Initialize Coinbase Wallet SDK
const coinbaseWallet = new CoinbaseWalletSDK({
  appName: APP_NAME,
  appLogoUrl: APP_LOGO_URL,
  darkMode: false
})

// Initialize a Web3 Provider object
const ethereum = coinbaseWallet.makeWeb3Provider(DEFAULT_ETH_JSONRPC_URL, DEFAULT_CHAIN_ID)

// Initialize a Web3 object
const web3 = new Web3(ethereum)


    function handleConnect(){


        ethereum.request({ method: 'eth_requestAccounts' }).then(response => {
            const accounts = response;
            console.log(`User's address is ${accounts[0]}`)
            setWalletAddress(accounts[0])
          
            // Optionally, have the default account set for web3.js
            web3.eth.defaultAccount = accounts[0]
          })
          
          // Alternatively, you can use ethereum.enable()
          ethereum.enable().then((accounts) => {
            console.log(`User's address is ${accounts[0]}`)
            web3.eth.defaultAccount = accounts[0]
          })

    }


    return (
        
       <>

            <Navbar />
            <div className='landing-page'>
            <img src={landing_bg} alt=""  />
                <div className="foreboding-text">Foreboding</div>
                <button className="wallet-button" onClick={handleConnect}>Connect Your Wallet</button>

                <a href="#" style={{position : 'absolute', top : '80%', left : '30%', fontSize : '30px', }} onClick={()=>{setIsPresentModelOpen(true)}}>Present</a>
                <a href="#" style={{position : 'absolute', top : '80%', left : '65%', fontSize : '30px', }} onClick={()=>{setIsFutureModelOpen(true)}}>Future</a>

            </div>
       
    <div className='chat_popup'>
    {isPresentModelOpen  && (
        <div className="chat__model">
           
           <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          
          <input
            type="text"
           
            placeholder="John..."
            onChange={(event) => {
              
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        
        
      // <Link to={{pathname:"/present",state:{username:username,room:room}}}>Play</Link>
      <Link to={'/present'} state={{ username:username,room:room }} >Play</Link>
   
       
        // <Chat socket={socket} username={username} room={room} />
      )}
      
     
    </div>

    
            
          </div>
         
    )}  
    </div>

    <div className='chat_popup'>
    {isFutureModelOpen  && (
        <div className="chat__model">
           
           <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          
          <input
            type="text"
           
            placeholder="John..."
            onChange={(event) => {
              
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        
        
        <Link to={'/future'} state={{ username:username,room:room }} >Play</Link>
      
   
       
        // <Chat socket={socket} username={username} room={room} />
      )}
      
     
    </div>

    
            
          </div>
         
    )}  
    </div>
    
   
    
    
    </>
     
            

        
       
    )


}


export default Landing