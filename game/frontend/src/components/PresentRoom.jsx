import React, { useState } from 'react';
import './PresentRoomStyles.css'
const PresentRoom = ({ backgroundImage, objects, onAddItemToBag }) => {
    const [zoomedObject, setZoomedObject] = useState(null);
    const handleObjectDoubleClick = (event, index) => {
        // Add the object to the bag
        console.log(objects[index])
        onAddItemToBag(objects[index]);
      };
  
    return (
      <div className="room">
        <img src={backgroundImage} alt="room" className="room__image" />
        {objects.map((object, index) => (
          <div
            key={index}
            className={`room__object ${index === zoomedObject ? 'zoomed' : ''}`}
            style={{
              top: object.position.y,
              left: object.position.x,
              width: object.size.width,
              height: object.size.height
            }}
            onClick={() => {
              setZoomedObject(index === zoomedObject ? null : index);
            }}
            onDoubleClick={(event) => handleObjectDoubleClick(event, index)}
          >
            <img src={object.image} alt="object" className="room__object-image" />
          </div>
        ))}
        
      </div>
    );
  };

export default PresentRoom;
