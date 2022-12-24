import React, { useState  ,useEffect, useRef} from 'react';
import './PresentRoomStyles.css'
import Document from '../components/props/Document.png'
const Computer = ({ image }) => {
  
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordStatus, setPasswordStatus] = useState('pending');
  const [error, setError] = useState('');
  

  const handleKeyPress = (event) => {
    const key = event.key;
    if (key >= '0' && key <= '9') {
      setPassword(password + key);
    }
  };

  const handleModelClose = () => {
    setIsModelOpen(false);
    setPassword('');
    setError('');
  };

  const handleModelSubmit = () => {
    if (password === '0000') {
      setPasswordStatus('success');
      // Load the document
      setError('');
    } else {
      setPasswordStatus('error');
      setError('Invalid password');
    }
  };

  return (
    <div className="computer" >
      <img src={image} alt="computer" onClick={() => setIsModelOpen(true)} />
      {isModelOpen  && (passwordStatus==='pending' || passwordStatus==='error') && (
        <div className="computer__model">
            <span>Enter Password..</span>
          <div className="computer__keypad">
            <button onClick={() => setPassword(password + '1')}>1</button>
            <button onClick={() => setPassword(password + '2')}>2</button>
            <button onClick={() => setPassword(password + '3')}>3</button>
            <button onClick={() => setPassword(password + '4')}>4</button>
            <button onClick={() => setPassword(password + '5')}>5</button>
            <button onClick={() => setPassword(password + '6')}>6</button>
            <button onClick={() => setPassword(password + '7')}>7</button>
            <button onClick={() => setPassword(password + '8')}>8</button>
            <button onClick={() => setPassword(password + '9')}>9</button>
            <button onClick={() => setPassword(password + '0')}>0</button>
          </div>
          <div className="computer__password">
            {password.split('').map((char, index) => (
              <span key={index}>*</span>
            ))}
          </div>
          {error && <div className="computer__error">{error}</div>}
          <div className="computer__actions">
            <button onClick={handleModelClose}>Close</button>
            <button onClick={handleModelSubmit}>Submit</button>
          </div>
        </div>
      )}
      {isModelOpen  && passwordStatus==='success' && (
        <div className="computer__model">
            <div className='computer__keypad'>
            <img src={Document}></img>
            <div className="computer__actions">
            <button onClick={handleModelClose}>Close</button>
            </div>
            
          </div>
        
        
    </div>
      )}
      
    </div>
  );
            }
export default Computer;
