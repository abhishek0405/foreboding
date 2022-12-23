

import React from 'react';

import {useState, useEffect} from 'react'
import Modal from 'react-modal';

import { future_bg, skeleton, diary, opendiary, key, key_tag, openparchment, parchroll } from "../assets";


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





function Future () {


    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalOneIsOpen, setOneIsOpen] = React.useState(false);
    const [modalTwoIsOpen, setTwoIsOpen] = React.useState(false);
    let subtitle;


    useEffect(() => {
        alert("welcome to the future. there was a deadly virus outbreak and countless people have lost their life. you are in your laboratory, thankfully alive. you just figured a way to communicate with your past self and give hints to save the world. after all, it was you who created this deadly virus in the first place. good luck.")
        
      }, []);


      

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



      function MouseOver(event) {
        event.target.style.cursor = 'pointer';
      }
      function MouseOut(event){
        event.target.style.background="";
      }
          


    return (
        <>
        <div style={{overflowX : 'hidden', overflow: 'hidden' ,position : 'fixed'}}>
        <img src={future_bg} alt=""  />
        
        </div>

       



        <div className='login-modal'>


        <div onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={openModal}>
            <h1 style={{color : 'rgba(0, 0, 0, 1)', position : 'absolute', top : '450px', left : '950px', msUserSelect : 'none', MozUserSelect: "none",
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
            <h1 style={{color : 'rgba(0, 0, 0, 1)', position : 'absolute', top : '540px', left : '700px', msUserSelect : 'none', MozUserSelect: "none",
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
            <h1 style={{color : 'rgba(0, 0, 0, 1)', position : 'absolute', top : '630px', left : '200px', msUserSelect : 'none', MozUserSelect: "none",
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
        </>
    )


}


export default Future 