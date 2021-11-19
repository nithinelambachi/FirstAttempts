import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Signup from './user/Signup';
import React, {useState} from 'react';
import { Navbar } from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SIgnin } from './user/SIgnin';
import Profile from './user/Profile';
function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
     
<Routes>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/signin" element={<SIgnin/>} />
  <Route path="/profile" element={()=> <Profile authorized={true}/>} />
</Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
