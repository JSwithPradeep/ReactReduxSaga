
import React from 'react';
import './App.css';
import Header from './component/Header';
import Main from './component/main';
import Card from './component/Card';
import { Route,Routes } from 'react-router-dom';
//import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <div className='App'>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/card' element={<Card/>} />

      </Routes>
       </div>
  );
}

export default App;
