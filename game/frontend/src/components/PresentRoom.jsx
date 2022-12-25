import React, { useState } from 'react';
import './PresentRoomStyles.css'
import Keypad from './Keypad';
import locker_117 from '../components/props/117_locker.png'
import locker_204 from '../components/props/204_locker.png'
import locker_359 from '../components/props/359_locker.png'
import locker_593 from '../components/props/593_locker.png'
import locker_862 from '../components/props/862_locker.png'
import locked_lock from '../components/props/locked_lock.png'
import empty_locker from '../components/props/empty_locker.png'
import key_117 from '../components/props/key_117.png'
import key_204 from '../components/props/key_204.png'
import key_359 from '../components/props/key_359.png'
import key_593 from '../components/props/key_593.png'
import key_862 from '../components/props/key_862.png'
import red_siren from '../components/props/red_siren.png'
import green_siren from '../components/props/green_siren.png'
//import { Redirect } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
const PresentRoom = ({ backgroundImage, lockers, onAddItemToBag,onItemRemoveFromBag }) => {
    const [zoomedObject, setZoomedObject] = useState(null);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [chosenLocker,setChosenLocker]=useState(null)
    const [chosenKey,setChosenKey]=useState(null)
    const [chosenKeyName,setChosenKeyName]=useState('')
    const [sirenImg,setSirenImg] = useState(red_siren)
    const [chosenKeys,setChosenKeys] = useState([])
    const [lockOpen, setLockOpen] = useState(false);
    const [shouldRedirect, setShouldRedirect] = useState(false);

    const navigate = useNavigate();
    const handleModelClose = () => {
      setIsModelOpen(false);
     
    };
    const onDragOverHandler = (event) => {
      event.preventDefault();
    };
    const onDropHandler = (event) => {
      //event.preventDefault();
      //alert(event.dataTransfer.getData("keyType"))
      setShouldRedirect(true);
      // if (shouldRedirect) {
      //   return <Redirect to="/some/path" />;
      // }
      const keyType = event.dataTransfer.getData("keyType");
      if (keyType === "correctKey") {
        navigate('/danger');
        setLockOpen(true);
        //check this
        onItemRemoveFromBag('key117');
        //can redirect to new room directly
        

      }
      
    };
    function handlePasswordCorrect() {
      setSirenImg(green_siren)
      setIsPasswordCorrect(true);
    }
    const handleObjectDoubleClick = (event, img, name) => {
        // Add the object to the bag
        //console.log(lockers[index])
        const item = {}
        item.image = img;
        item.name=name;
        setChosenKeys([name,...chosenKeys])
        onAddItemToBag(item);
      };
      const handleLockerClick = ()=>{
        
      }
      
    return (
      <>
      
      <Keypad onPasswordCorrect={handlePasswordCorrect} image="https://thumbs.dreamstime.com/b/alphabet-keypad-parking-meter-pay-machine-also-has-words-cancel-ok-them-numbers-49482354.jpg"></Keypad>
      <div className="room">
      {lockOpen===false?
      <img src={locked_lock} class='room__object'style={{height:'20px',width:'20px',top:'470px',left:'440px',zIndex:2}} onDragOver={onDragOverHandler} onDrop={onDropHandler}></img>
      :
      <img></img>} 
      <img src={sirenImg} class='room__object'style={{height:'20px',width:'20px',top:'310px',left:'708px'}}></img>
        <img src={backgroundImage} alt="room" className="room__image" />
        
        {lockers.map((object, index) => (
        
          <div
            key={index}
            className={`room__object ${index === zoomedObject ? 'zoomed' : ''}`}
            style={{
              top: object.position.y,
              left: object.position.x,
              width: object.size.width,
              height: object.size.height
            }}
            onClick={isPasswordCorrect ? (()=>{
              if(index===0){
                const keyExists = chosenKeys.find((key)=>key==='key862')
                if(keyExists){
                 setChosenLocker(empty_locker)
                }
                else{
                  setChosenLocker(locker_862);
                }
                setChosenKey(key_862)
                setChosenKeyName('key862')
              }
              else if(index===2){
                const keyExists = chosenKeys.find((key)=>key==='key593')
                if(keyExists){
                 setChosenLocker(empty_locker)
                }
                else{
                  setChosenLocker(locker_593);
                }
                setChosenKey(key_593)
                setChosenKeyName('key593')
              }
              else if(index===4){
                const keyExists = chosenKeys.find((key)=>key==='key359')
                if(keyExists){
                 setChosenLocker(empty_locker)
                }
                else{
                  setChosenLocker(locker_359);
                }
                setChosenKey(key_359)
                setChosenKeyName('key359')
              }
              else if(index===6){
                const keyExists = chosenKeys.find((key)=>key==='key204')
                if(keyExists){
                 setChosenLocker(empty_locker)
                }
                else{
                  setChosenLocker(locker_204);
                }
                setChosenKey(key_204)
                setChosenKeyName('key204')
              }
              else if(index===8){
                const keyExists = chosenKeys.find((key)=>key==='key117')
                if(keyExists){
                 setChosenLocker(empty_locker)
                }
                else{
                  setChosenLocker(locker_117);
                }
   
                
                setChosenKey(key_117);
                setChosenKeyName('key117');
              }
              else{
                setChosenKey(null);
                setChosenKeyName('');
                setChosenLocker(empty_locker)
              }
              setIsModelOpen(true);
              //setZoomedObject(index === zoomedObject ? null : index);
            }) : () => {}}
            // s
            // onDoubleClick={isPasswordCorrect?(event) => handleObjectDoubleClick(event, index):()=>{}}
          >
            
            <img src={object.image} alt="object" className="room__object-image" />
          </div>
        ))}

        {isModelOpen && (
       <div className="keypad" >
          <div className="keypad__model">
          <img src={chosenLocker} style={{width:"100%",height:"100%"}}  onDoubleClick={(event) => 
            {
              handleObjectDoubleClick(event, chosenKey,chosenKeyName);
            
              setChosenLocker(empty_locker)
              
            
              
          }}></img>
          <button onClick={handleModelClose}>Close</button>
          </div>
          </div>
        )}

    
        
        
      </div>
      </>
    );
    
  };

export default PresentRoom;
