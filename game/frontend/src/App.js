import logo from './logo.svg';
import './App.css';
import { Landing, Present, Future, Danger, Marketplace, Mint, MyCollection } from './components';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (


    <Router>

      <div className="App">
        <div className="content">

          <Routes>

            <Route
              exact
              path="/"
              element={
                <>
                
                  <Landing />
                
                  
                </>
              }
            />

          <Route
              exact
              path="/present"
              element={
                <>
                  <Present />
                </>
              }
            />

          <Route
              exact
              path="/future"
              element={
                <>
                  <Future />
                </>
              }
            />

          <Route
              exact
              path="/danger"
              element={
                <>
                  <Danger />
                </>
              }
            />


            <Route
              exact
              path="/marketplace"
              element={
                <>
                <div className='black-background'>
                  <Marketplace />
                </div>
                  
                </>
              }
            />

            <Route
              exact
              path="/mint"
              element={
                <>
                <div className='black-background'>
                  <Mint />
                </div>
                  
                </>
              }
            />


          <Route
              exact
              path="/myCollection"
              element={
                <>
                <div className='black-background'>
                  <MyCollection />
                </div>
                  
                </>
              }
            />


          </Routes>

          






        </div>

            
      </div>

    </Router>
    
  );
}

export default App;
