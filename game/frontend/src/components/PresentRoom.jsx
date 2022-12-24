import React, { useState } from 'react';
import './PresentRoomStyles.css'
import Keypad from './Keypad';
const PresentRoom = ({ backgroundImage, lockers, onAddItemToBag }) => {
    const [zoomedObject, setZoomedObject] = useState(null);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
    function handlePasswordCorrect() {
      
      setIsPasswordCorrect(true);
    }
    const handleObjectDoubleClick = (event, index) => {
        // Add the object to the bag
        console.log(lockers[index])
        onAddItemToBag(lockers[index]);
      };
      const handleLockerClick = ()=>{
        
      }
      
    return (
      <>
      <Keypad onPasswordCorrect={handlePasswordCorrect} image="https://thumbs.dreamstime.com/b/alphabet-keypad-parking-meter-pay-machine-also-has-words-cancel-ok-them-numbers-49482354.jpg"></Keypad>
      <div className="room">
         
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
            onClick={isPasswordCorrect ? (()=>{setZoomedObject(index === zoomedObject ? null : index);}) : () => {}}
            // s
            // onDoubleClick={(event) => handleObjectDoubleClick(event, index)}
          >
            
            <img src={object.image} alt="object" className="room__object-image" />
          </div>
        ))}
        
        
      </div>
      </>
    );
    
  };

export default PresentRoom;
