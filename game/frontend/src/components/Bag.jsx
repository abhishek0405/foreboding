import React from 'react';
import './PresentRoomStyles.css'
const Bag = ({ items }) => {
  return (
    <div className="bag">
      {items.map((item, index) => (
        <div key={index} className="bag__item">
          <img src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
  );
};

export default Bag;
