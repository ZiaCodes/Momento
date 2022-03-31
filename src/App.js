import React,{ useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Home from './container/Home';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) navigate('/Login');
    else navigate('/');
  }, []);
  return (
    <Routes>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='/*' element={<Home/>}/>
    </Routes>
  )
}

export default App;