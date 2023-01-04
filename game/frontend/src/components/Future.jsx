

import React from 'react';
import { useLocation } from 'react-router-dom';
import {useState, useEffect,useContext} from 'react'
import Modal from 'react-modal';
import InventoryBagFuture from './InventoryCardBagFuture';
import axios from 'axios'
import SocketContext from "./SocketContext";
import { future_bg, skeleton, diary, opendiary, key, key_tag, openparchment, parchroll, paper_ball, open_paperball } from "../assets";
import Chat from "./Chat";
import theme from "../assets/theme.mp3"
import phone from "../assets/phone.png"
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      minWidth: '25%',
      minHeight: '40%',
      background :'rgba(0,0,0,0)',
      position: 'absolute',
      overflowX : 'hidden',
      overflowY : 'hidden',
      outline : 'none'
      
      
      
    },
  };

  const customStylesFour = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      minWidth: '25%',
      minHeight: '40%',
      background :'rgba(255,255,255,1)',
      position: 'absolute',
      overflowX : 'hidden',
      overflowY : 'hidden',
      outline : 'none'
      
      
      
    },
  };
  

  Modal.setAppElement('#root');





function Future () {
  const socket = useContext(SocketContext);
  const location = useLocation();
  // console.log(location)
  const data = location.state;
  const username = data.username;
  const room = data.room;

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalOneIsOpen, setOneIsOpen] = React.useState(false);
    const [modalTwoIsOpen, setTwoIsOpen] = React.useState(false);
    const [modalThreeIsOpen, setThreeIsOpen] = React.useState(false);
    const [modalFourIsOpen, setFourIsOpen] = React.useState(false);
    const [hint, setHint] = useState('Hint')
    const [selectedOption, setSelectedOption] = React.useState('');
    const [showChat,setShowChat] = useState(false);

    
    let subtitle;


   

      

  function openModal(e) {
    e.preventDefault()
    console.log("hello")
      setIsOpen(true);
  }
  function afterOpenModal1() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
  }

  function closeModal() {

      setIsOpen(false);
  }


  function openModalOne(e) {
    e.preventDefault()
    console.log("hello")
      setOneIsOpen(true);
  }
  function afterOpenModalOne() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
  }

  function closeModalOne() {

      setOneIsOpen(false);
  }



  function openModalTwo(e) {
    e.preventDefault()
    console.log("hello")
      setTwoIsOpen(true);
  }
  function afterOpenModalTwo() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
  }

  function closeModalTwo() {

      setTwoIsOpen(false);
  }






  function openModalThree(e) {
    e.preventDefault()
    console.log("hello")
      setThreeIsOpen(true);
  }
  function afterOpenModalThree() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
  }

  function closeModalThree() {

      setThreeIsOpen(false);
  }



  function openModalFour(e) {
    e.preventDefault()
    setFourIsOpen(true)
  }
  function afterOpenModalFour() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
  }

  function closeModalFour() {

      setFourIsOpen(false);
  }



      function MouseOver(event) {
        event.target.style.cursor = 'pointer';
      }
      function MouseOut(event){
        event.target.style.background="";
      }

      const handleChange = (event) => {
        setSelectedOption(event.target.value);
        console.log(event.target.value)
      }
          
      const handleUse = (e, tokenId, owner ) => {
        console.log('tokenId: ', tokenId)
      console.log('owner: ', owner)
      
      var d = {}
        d.tokenId = tokenId
        d.user = owner
      
      if(tokenId !== null && owner !== null){

        axios.post('http://localhost:5000/check/addUsedToken', d, {
        withCredentials: true
      })
      .then(res=> {console.log(res.data)
          if(res.data.status === 'error'){
              console.log('here')
              
          }
          else{
            console.log('succesfully added')
          }
      
      })
      .catch(err=>console.log(err.response.data));

      }

        
        
        
        openModalFour(e)
      }

      const handleHint = (e) => {
        e.preventDefault()
        closeModalFour()
        console.log(selectedOption)
        if(selectedOption === 'option1'){
          const newHint = 'Use the diary to provide file password to the Present player';
          if(hint===newHint){
            return;
          }
          setHint(newHint);
        }
        else if(selectedOption === 'option2'){
          const newHint = 'Use the cipher to provide password to the Present player';
          if(hint===newHint){
            return;
          }
          setHint(newHint);
          

        }
        else if(selectedOption === 'option3'){
          const newHint ='Give the correct key number to the Present player';
          if(hint===newHint){
            return;
          }
          setHint(newHint);
          

        }
        else if(selectedOption === 'option4'){
          const newHint='Use the poem to provide the correct order of chemicals to pour on virus to present player';
          if(hint===newHint){
            return;
          }
          setHint(newHint);
        }

      }


    return (
        <>
        <audio src={theme} loop="true" autoplay="true"></audio>
        <div style={{overflowX : 'hidden', overflow: 'hidden' ,position : 'fixed'}}>
        <img src={future_bg} alt=""  />
        
        </div>

       



        <div className='login-modal'>


        <div onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={openModal}>
            <h1 style={{color : 'rgba(0, 0, 0, 1)', position : 'absolute', top : '390px', left : '900px', msUserSelect : 'none', MozUserSelect: "none",
WebkitUserSelect: "none"}} ><img src={diary} style={{width : '100px', height : '10px'}}  alt="" /></h1>
        </div>
        
        <Modal
               isOpen={modalIsOpen}
               
               onRequestClose={closeModal}
               style={customStyles}
               contentLabel="Example Modal"
               className={'bg-discount-gradient'}
           >
           <img src={opendiary} alt="" style={{width: '100%'}} />
            </Modal>

           </div> 



           <div className='login-modal'>


        <div onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={openModalOne}>
            <h1 style={{color : 'rgba(0, 0, 0, 1)', position : 'absolute', top : '470px', left : '550px', msUserSelect : 'none', MozUserSelect: "none",
WebkitUserSelect: "none"}} ><img src={key} style={{width : '100px', height : '10px'}}  alt="" /></h1>
        </div>
        
        <Modal
               isOpen={modalOneIsOpen}
               
               onRequestClose={closeModalOne}
               style={customStyles}
               contentLabel="Example Modal"
               className={'bg-discount-gradient'}
           >
           <img src={key_tag} alt="" style={{width: '100%'}} />
            </Modal>

           </div>





           <div className='login-modal'>


        <div onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={openModalTwo}>
            <h1 style={{color : 'rgba(0, 0, 0, 1)', position : 'absolute', top : '570px', left : '200px', msUserSelect : 'none', MozUserSelect: "none",
WebkitUserSelect: "none"}} ><img src={parchroll} style={{width : '80px', height : '30px'}}  alt="" /></h1>
        </div>
        
        <Modal
               isOpen={modalTwoIsOpen}
               
               onRequestClose={closeModalTwo}
               style={customStyles}
               contentLabel="Example Modal"
               className={'bg-discount-gradient'}
           >
           <img src={openparchment} alt="" style={{width: '100%'}} />
            </Modal>

           </div> 








           <div className='login-modal'>


        <div onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={openModalThree}>
            <h1 style={{color : 'rgba(0, 0, 0, 1)', position : 'absolute', top : '330px', left : '1150px', msUserSelect : 'none', MozUserSelect: "none",
WebkitUserSelect: "none"}} ><img src={paper_ball} style={{width : '60px', height : '20px'}}  alt="" /></h1>
        </div>
        
        <Modal
               isOpen={modalThreeIsOpen}
               
               onRequestClose={closeModalThree}
               style={customStyles}
               contentLabel="Example Modal"
               className={'bg-discount-gradient'}
           >
           <img src={open_paperball} alt="" style={{width: '100%'}} />
            </Modal>

           </div>  
           <InventoryBagFuture handleUse = {handleUse} />
           <div style={{
            position: 'absolute',
            top: 650,
            left: 0,
          
            minWidth: '200px',
            height: '50px',
            backgroundColor: 'red',
            opacity : 0.4,
            color : 'white'
          }}>
            {hint}



            <Modal
               isOpen={modalFourIsOpen}
               
               onRequestClose={closeModalFour}
               style={customStylesFour}
               contentLabel="Example Modal"
               className={'bg-discount-gradient'}
           >
           <h1>Select the status of the Present player: </h1>

           <form onSubmit={handleHint}>


           <select value={selectedOption} onChange={handleChange}>
           <option value="option1">Didn't do anything yet</option>
            <option value="option2">Unlocked file on computer</option>
            <option value="option3">Unlocked lockers</option>
            
            <option value="option4">Entered danger room</option>
          </select>

              <br />
              <button className='btn-black' type='submit'>Get hint</button>
           </form>
           

            </Modal>
          </div>



          {showChat ? (
        <div style={{position:'absolute',left:"83%",top:"350px",zIndex:5}}>
      <Chat socket={socket} username={username} room={room} />
      </div>
         
       
      ) : (
        <img src={phone} onClick = {()=>{setShowChat(true)}}style={{position:"absolute",left:"450px",width:"30px",height:"30px",top:"525px"}}></img>
      )}

        </>
    )


}


export default Future 