import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Fab from '@mui/material/Fab';
import { useState } from 'react';


const Counter = () => {
    const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  }

  const decrease = () => {
    setCounter(counter - 1);
  }

  return (
  <div className="body-layout">
    <div className="form">
        <Fab onClick={increase} id='increase'>
          <AddIcon />
        </Fab>
        <h3> {counter} </h3>
        <Fab onClick={decrease} id='decrease'>
          <RemoveIcon />
        </Fab>
      </div>
  </div>);
};

export default Counter;
