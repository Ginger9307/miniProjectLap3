import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from './components/Counter';
import Things from './components/Things';
import { Outlet, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
 
 
function App() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <nav>
       
            <Link to='/' id='home'>Home</Link>  |  {" "}

            <Link to='/counter' data-testid='counter'>Counter</Link>  |  {" "}

            <Link to='/things' id='things'>Things</Link>  |  {" "}
    
        <span onClick={() => navigate(-1)} id="goBack">Go back</span>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;