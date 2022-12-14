import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Forget from './Forget';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';

export default function Routing() {
  return (
  <div>
   <Routes>
   <Route exact path='/' element={<Login />}></Route>
    <Route path='/SignUp' element={<Signup />}></Route>
    <Route path='/Forget' element={<Forget />}></Route>
    <Route path='/Login' element={<Login />}></Route>
    <Route path='/Home' element={<Home />}></Route>
   </Routes>
  </div>
  )
}
