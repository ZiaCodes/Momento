import React, { useState, useRef, useEffect } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom';
import logo from '../assets/logo.png';

const Home = () => {

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="nav">
        <ul className='flex justify-between items-center'>
          <HiMenu className='text-3xl'/>
        </ul>
      </div>
    </div>
  );
};

export default Home;