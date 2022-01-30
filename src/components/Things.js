import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { addThing } from '../actions';


const Things = () => {
    // selector hook for all todos data in the store
    const list = useSelector(list => list.all);
    // console.log(list)
    // dispatch hook for data in the store
    const dispatch = useDispatch();

    // state hook for text input
    const [textInput, setTextInput] = useState('');

    // handle text input
    const handleInput = (e) => {
      const value = e.target.value;
      console.log(value);
      setTextInput(value);
    }
    // clear textInput after button click
    const handleClickClear = () => {
    setTextInput('');
}


    return ( 
      <div className="body-layout">
        <div className="form">
            <input type="text" value={textInput} onChange={handleInput} />
            <Fab onClick={() => {dispatch(addThing(textInput)); handleClickClear()}}>
            <AddIcon />
            </Fab>
        </div>
        <ul className="thing-list">
            {
              list.map(item => (
                <li className="thing" data-testid='thing' key= {item}> 
                    <div className="itemLabel" > 
                        {item} 
                    </div> 
                </li>
              ))
            }
        </ul>
      </div>);
  };

export default Things;