

import axios from 'axios';
import React from 'react';

import {useState, useEffect,useContext} from 'react'
import Modal from 'react-modal';
import { useLocation } from 'react-router-dom';
import { future_bg, skeleton, diary, opendiary, key, key_tag, openparchment, parchroll, danger_room, red_flask, blue_flask, green_flask, virus } from "../assets";

import DangerBag from './DangerBag';
import InventoryBag from './InventoryCardBag';
import Chat from "./Chat";
import SocketContext from "./SocketContext";
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
  

  Modal.setAppElement('#root');





function DangerRoom () {
  const socket = useContext(SocketContext);

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalOneIsOpen, setOneIsOpen] = React.useState(false);
    const [modalTwoIsOpen, setTwoIsOpen] = React.useState(false);
    const [items, setItems] = useState([]);
    const location = useLocation();
    const username = location.state.username;
    const room = location.state.room;
    // const data = location.state.data;
    console.log("danger loc")
    console.log(location)
 
 
    let subtitle;
    const [isVisibleRed, setIsVisibleRed] = useState(true);
    const [isVisibleBlue, setIsVisibleBlue] = useState(true);
    const [isVisibleGreen, setIsVisibleGreen] = useState(true);
    const [isVirusDestroyed, setVirusDestroyed] = useState(false)
    const [hint, setHint] = useState('Hint')

    const expectedOrder = ['red', 'blue', 'green'];
    let droppedChemicals = 0;



    const handleUse = (tokenId, owner) => {
      console.log('tokenId: ', tokenId)
      console.log('owner: ', owner)
      if(isVirusDestroyed === false){
        setHint('select the flasks and put them in your bag. pour in correct order on the virus.')
      }
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

      
    }
    



    const handleAddItemToBag = (item) => {
      const itemExists = items.find((i)=>i.name===item.name)
      if(!itemExists){
        setItems([...items, item]);
      }
     
    };
    const handleRemoveFromBag = (itemName)=>{
      alert("hi")
      setItems(items.filter(function(_item){
        alert(_item.name)
        return _item.name !== itemName
      }))
    }


    const onDragOverHandler = (event) => {
      event.preventDefault();
    };
    

    const handleObjectDoubleClick = (event, img, name) => {
      
      const item = {}
      item.image = img;
      item.name=name;
      
      handleAddItemToBag(item);
    };

    

      

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



      function MouseOver(event) {
        event.target.style.cursor = 'pointer';
      }
      function MouseOut(event){
        event.target.style.background="";
      }
          


    return (
        <>
       
        <div style={{overflowX : 'hidden', overflow: 'hidden' ,position : 'fixed'}}>
        <img src={danger_room} alt=""  />
        <div style={{
      position: 'absolute',
      left: 0,
      bottom: 150,
      minWidth: '200px',
      height: '50px',
      backgroundColor: 'red',
      opacity : 0.4,
      color : 'white'
    }}>
      {hint}
    </div>
        
        </div>

       



        <div className='login-modal'>


        <div onMouseOver={MouseOver} onMouseOut={MouseOut} >
            <h1 style={{color : 'rgba(0, 0, 0, 1)', position : 'absolute', top : '450px', left : '400px', msUserSelect : 'none', MozUserSelect: "none",
WebkitUserSelect: "none"}} >
  
  {
    isVisibleRed && (
      <img src={red_flask} style={{width : '150px', height : '100px'}}  alt="" onDoubleClick={(event) => 
        {
          handleObjectDoubleClick(event, red_flask,'red_flask');
          setIsVisibleRed(false)
        
          
          
        
          
      }} />
    )
  }
  
  
  
  
  </h1>
        </div>
        
        

           </div> 



           <div className='login-modal'>


        <div onMouseOver={MouseOver} onMouseOut={MouseOut} >
            <h1 style={{color : 'rgba(0, 0, 0, 1)', position : 'absolute', top : '265px', left : '1000px', msUserSelect : 'none', MozUserSelect: "none",
WebkitUserSelect: "none"}} >
  
  {
    isVisibleBlue && (
      <img src={blue_flask} style={{width : '50px', height : '50px'}}  alt="" onDoubleClick={(event) => 
        {
          handleObjectDoubleClick(event, blue_flask,'blue_flask');
          setIsVisibleBlue(false)
          
          
        
          
      }} />
    )
  }
  
  
  </h1>
        </div>
        
        

           </div>





           <div className='login-modal'>


        <div onMouseOver={MouseOver} onMouseOut={MouseOut} >
                    <h1 style={{color : 'rgba(0, 0, 0, 1)', position : 'absolute', top : '260px', left : '120px', msUserSelect : 'none', MozUserSelect: "none",
        WebkitUserSelect: "none"}} >
          
          {
            isVisibleGreen && (
              <img src={green_flask} style={{width : '50px', height : '40px'}}  alt=""  onDoubleClick={(event) => 
                {
                  handleObjectDoubleClick(event, green_flask,'green_flask');
                  setIsVisibleGreen(false)
                  
                  
                
                  
              }}/>
            )
          }
          
          
          
          </h1>
        </div>
        
        

           </div>





           <div className='login-modal'>



           <Modal
               isOpen={modalIsOpen}
               
               onRequestClose={closeModal}
               style={customStyles}
               contentLabel="Example Modal"
               className={'bg-discount-gradient'}
           >
           <h1>Incorrect order!</h1>
            </Modal>


            <Modal
               isOpen={modalOneIsOpen}
               
               onRequestClose={closeModalOne}
               style={customStyles}
               contentLabel="Example Modal"
               className={'bg-discount-gradient'}
           >
           <h1>Congratulations! you have saved the world!</h1>
            </Modal>


        <div onMouseOver={MouseOver} onMouseOut={MouseOut} >

                    <h1 style={{color : 'rgba(0, 0, 0, 1)', position : 'absolute', top : '440px', left : '670px', msUserSelect : 'none', MozUserSelect: "none",
        WebkitUserSelect: "none"}} >
          
          
          <img src={virus} style={{width : '50px', height : '50px'}}  alt="" 
          
          onDrop={event => {
            console.log('dropped')
            console.log(event.dataTransfer.getData('flask'))
            event.preventDefault();

            const data = event.dataTransfer.getData('flask');
            if (data !== expectedOrder[droppedChemicals]) {
              //console.error('Incorrect order!');
              openModal(event)
              return;
            }
            //event.target.appendChild(document.getElementById(data));
            droppedChemicals += 1;
            if(droppedChemicals === 3){
              openModalOne(event)
              setVirusDestroyed(true)
            }
          }}
          onDragOver={event => {
            event.preventDefault();
          }}
        
        
        
        /></h1>
        </div>
        
        

           </div>  
           <DangerBag items={items} />
           <InventoryBag handleUse={handleUse} />
           {socket ? (
        <div style={{position:'absolute',left:"83%",top:"350px",zIndex:5}}>
      <Chat socket={socket} username={username} room={room} />
      </div>
         
       
      ) : (
        <></>
      )}
        </> 
    )


}


export default DangerRoom 