import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import thingReducer from './reducers/things';
import { Provider } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from './components/Counter';
import Things from './components/Things';
import Home from './components/Home';

const store = createStore(thingReducer, devToolsEnhancer());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='/counter' element={<Counter />} />
            <Route path='/things' element={<Things />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

