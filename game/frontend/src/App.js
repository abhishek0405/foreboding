import logo from './logo.svg';
import './App.css';
import { Landing, Present, Future, Danger } from './components';
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


          </Routes>

          






        </div>

            
      </div>

    </Router>
    
  );
}

export default App;
