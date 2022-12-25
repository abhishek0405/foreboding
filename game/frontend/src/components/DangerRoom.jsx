

import React from 'react';

import {useState, useEffect} from 'react'
import Modal from 'react-modal';

import { future_bg, skeleton, diary, opendiary, key, key_tag, openparchment, parchroll, danger_room, red_flask, blue_flask, green_flask, virus } from "../assets";

import DangerBag from './DangerBag';


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


    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalOneIsOpen, setOneIsOpen] = React.useState(false);
    const [modalTwoIsOpen, setTwoIsOpen] = React.useState(false);
    const [items, setItems] = useState([]);
 
 
    let subtitle;
    const [isVisibleRed, setIsVisibleRed] = useState(true);
    const [isVisibleBlue, setIsVisibleBlue] = useState(true);
    const [isVisibleGreen, setIsVisibleGreen] = useState(true);

    const expectedOrder = ['red', 'blue', 'green'];
    let droppedChemicals = 0;

    



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
    // const onDropHandler = (event) => {
    //   event.preventDefault();
    //   //alert(event.dataTransfer.getData("keyType"))
    //   const keyType = event.dataTransfer.getData("keyType");
    //   if (keyType === "correctKey") {
    //     setLockOpen(true);
    //     //check this
    //     onItemRemoveFromBag('key117');
    //     //can redirect to new room directly
    //   }
      
    // };

    const handleObjectDoubleClick = (event, img, name) => {
      // Add the object to the bag
      //console.log(lockers[index])
      const item = {}
      item.image = img;
      item.name=name;
      //setChosenKeys([name,...chosenKeys])
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
            <h1 style={{color : 'rgba(0, 0, 0, 1)', position : 'absolute', top : '315px', left : '1200px', msUserSelect : 'none', MozUserSelect: "none",
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
                    <h1 style={{color : 'rgba(0, 0, 0, 1)', position : 'absolute', top : '550px', left : '0px', msUserSelect : 'none', MozUserSelect: "none",
        WebkitUserSelect: "none"}} >
          
          {
            isVisibleGreen && (
              <img src={green_flask} style={{width : '80px', height : '50px'}}  alt=""  onDoubleClick={(event) => 
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
            }
          }}
          onDragOver={event => {
            event.preventDefault();
          }}
        
        
        
        /></h1>
        </div>
        
        

           </div>  
           <DangerBag items={items} />
        </>
    )


}


export default DangerRoom 