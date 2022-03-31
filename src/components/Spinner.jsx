import React from 'react';
import loading from '../assets/loading.gif';

function Spinner({ message }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <img src={loading} alt="loading."/>
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
}

export default Spinner;