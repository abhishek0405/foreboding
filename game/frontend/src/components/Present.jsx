import React, { useState } from 'react';
import './PresentRoomStyles.css'
import chemical from '../components/props/chemical.png'
import computer from '../components/props/computer.png'
import closedBox from '../components/props/closedBox.png'
import scissor from '../components/props/scissor.png'
import scissor_new from '../components/props/scissor_new.png'
import locker from '../components/props/locker.png'
import PresentRoom from "../components/PresentRoom"
import Bag from './Bag';
import LaptopImg from '../components/props/laptop.png'
import Computer  from './Computer';
import Keypad from './Keypad';
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
      lockers={[
        // {
        //   position: { x: 720, y:645 },
        //   size: { width: 70, height: 70 },
        //   image: scissor_new
        // },
        {
          position: { x: 670, y: 340 },
          size: { width: 30, height: 30 },
          image:locker
        },
        {
          position: { x: 700, y: 340 },
          size: { width: 30, height: 30 },
          image:locker
        },
        {
          position: { x: 730, y: 340 },
          size: { width: 30, height: 30 },
          image:locker
        },
        {
          position: { x: 670, y: 370 },
          size: { width: 30, height: 30 },
          image:locker
        },
        {
          position: { x: 700, y: 370 },
          size: { width: 30, height: 30 },
          image:locker
        },
        {
          position: { x: 730, y: 370 },
          size: { width: 30, height: 30 },
          image:locker
        },
        {
          position: { x: 670, y: 400 },
          size: { width: 30, height: 30 },
          image:locker
        },
        {
          position: { x: 700, y: 400 },
          size: { width: 30, height: 30 },
          image:locker
        },
        {
          position: { x: 730, y: 400 },
          size: { width: 30, height: 30 },
          image:locker
        },
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
     <Computer image={LaptopImg}></Computer>
    
    </>
    
    
  );
};

export default Present