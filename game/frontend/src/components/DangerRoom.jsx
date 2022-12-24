

import React from 'react';

import {useState, useEffect} from 'react'
import Modal from 'react-modal';

import { future_bg, skeleton, diary, opendiary, key, key_tag, openparchment, parchroll, danger_room, red_flask, blue_flask, green_flask } from "../assets";

import Bag from './Bag';


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
        <img src={danger_room} alt=""  />
        
        </div>

       



        <div className='login-modal'>


        <div onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={openModal}>
            <h1 style={{color : 'rgba(0, 0, 0, 1)', position : 'absolute', top : '450px', left : '400px', msUserSelect : 'none', MozUserSelect: "none",
WebkitUserSelect: "none"}} ><img src={red_flask} style={{width : '150px', height : '100px'}}  alt="" /></h1>
        </div>
        
        

           </div> 



           <div className='login-modal'>


        <div onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={openModalOne}>
            <h1 style={{color : 'rgba(0, 0, 0, 1)', position : 'absolute', top : '315px', left : '1200px', msUserSelect : 'none', MozUserSelect: "none",
WebkitUserSelect: "none"}} ><img src={blue_flask} style={{width : '50px', height : '50px'}}  alt="" /></h1>
        </div>
        
        

           </div>





           <div className='login-modal'>


        <div onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={openModalTwo}>
            <h1 style={{color : 'rgba(0, 0, 0, 1)', position : 'absolute', top : '550px', left : '0px', msUserSelect : 'none', MozUserSelect: "none",
WebkitUserSelect: "none"}} ><img src={green_flask} style={{width : '80px', height : '50px'}}  alt="" /></h1>
        </div>
        
        

           </div>  
        </>
    )


}


export default Future 