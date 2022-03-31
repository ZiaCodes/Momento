import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillLock } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md'
import Logo from '../assets/f-logo.png';
// import BgVideo from '../assets/bg.mp4';

const Register = () => {
  return (
      <>
        {/* <div className="absolute -z-10 w-full h-full">
            <video
            src={BgVideo}
            autoPlay
            muted
            controls={false}
            loop
            type="video/mp4" 
            className='opacity-100 relative w-full h-screen object-cover'
            />
        </div>  */}
    <div >
    <div className=" p-2 flex flex-col justify-between items-center ">
      <div>
        <img className="w-80" src={Logo} alt="logo"/>
        </div>
        <div className="text-center mt-3">
        <h1 className='text-xl text-black font-bold'>Sign Up for Momento <br /> <p className='text-sm font-normal text-gray-600 -tracking-tighter'>Its Quick and Easy</p></h1>
      </div>
      </div>

      <div className=" flex flex-col justify-center items-center p-2">
        <div className=" m-2 shadow-md border p-5 text-xl bg-white flex justify-between items-center text-center rounded-full">
          <FaUserAlt/>
          <input className='w-full px-2 border-none outline-none' type="text" placeholder='Name' />
          </div>
          
        <div className="m-2 shadow-md border p-5 text-xl bg-white flex  justify-between items-center text-center rounded-full">
          <MdEmail/>
          <input className='w-full px-2 border-none outline-none' type="email" placeholder='Email' />
          </div>
        <div className="m-2 shadow-md border p-5 text-xl bg-white flex  justify-between items-center text-center rounded-full">
          <AiFillLock/>
          <input className='w-full px-2 border-none outline-none' type="password" placeholder='Password' />
          </div>
        <div className="m-2 shadow-md border p-5 text-xl bg-white flex  justify-between items-center text-center rounded-full">
          <AiFillLock/>
          <input className='w-full px-2 border-none outline-none' type="email" placeholder='Confirm password' />
          </div>
          <div className="flex">
            <p className='text-xs text-center w-auto'>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy.<br /> You may receive SMS notifications from us and can opt out at any time.</p>
          </div>
        <div className="m-2 shadow-md border rounded-full bg-white  text-xl w-190 text-center">
          <button style={{
            background:'#30BAF1',
            color:'#fff'
          }} className="w-full h-full p-4 px-2 rounded-full" type="submit">Sign Up</button>
          </div>
          <p className=" text-slate-900 mt-4 ">Already have an account ?</p>
          <p className=" text-slate-900 "><b style={{color:'#30BAF1',cursor:'pointer'}}>
            <Link to="/login">
            Sign In</Link>
          </b> instead !</p>
        </div>
  </div>
  </>
  )
}

export default Register;