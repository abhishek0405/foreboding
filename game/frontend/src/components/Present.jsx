import React, { useState } from 'react';
import './PresentRoomStyles.css'
import chemical from '../components/props/chemical.png'
import computer from '../components/props/computer.png'
import closedBox from '../components/props/closedBox.png'
import scissor from '../components/props/scissor.png'
import scissor_new from '../components/props/scissor_new.png'
import PresentRoom from "../components/PresentRoom"
import Bag from './Bag';

const Present = () => {
 const [items, setItems] = useState([]);
 const handleAddItem = (item) => {
    setItems([...items, item]);
  };
  const handleAddItemToBag = (item) => {
    
    setItems([...items, item]);
  };
  return (
    <>
    <div className='room'>
    <PresentRoom
      backgroundImage="https://wallpaperaccess.com/full/758571.jpg"
      objects={[
        {
          position: { x: 720, y:645 },
          size: { width: 70, height: 70 },
          image: scissor_new
        },
        // {
        //   position: { x: 700, y: 620 },
        //   size: { width: 300, height: 300 },
        //   image: closedBox
        // },
        // {
        //   position: { x: 800, y: 480 },
        //   size: { width: 110, height: 100 },
        //   image: chemical
        // },
        // {
        //   position: { x: 100, y: 490 },
        //   size: { width: 300, height: 300 },
        //   image: computer
        // }
      ]} onAddItemToBag={handleAddItemToBag}
      
      
    />
   
    <Bag items={items} />
    
      {/* <button className="app__button" onClick={() => handleAddItem({ name: 'Item 2', image: scissor })}>
        Add Item
      </button> */}
     
     </div>
     
    </>
    
  );
};

export default Present