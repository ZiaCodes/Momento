import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillLock } from 'react-icons/ai';
// import {AiFillEyeInvisible} from 'react-icons/ai';
// import {AiFillEye} from 'react-icons/ai';
import {GrAdd} from 'react-icons/gr';
import Logo from '../assets/logo.png';
import { client } from '../client';
import BgVideo from '../assets/bg-log.mp4';

const Login = () => {
  const navigate = useNavigate();
  
  const responseGoogle = (response) =>{
    console.log(response);
    localStorage.setItem('user', JSON.stringify(response.profileObj));

    const { name, googleId, imageUrl } = response.profileObj;

    const doc ={
      _id: googleId,
      _type: 'user',
      userName: name,
      image: imageUrl
    }
    client.createIfNotExists(doc)
      .then(()=>{
        navigate('/', { replace: true })
      })
  }

  return (
    <>
    <div className="hidden cursor-pointer lg:block hover:scale-105 left-28 top-28 absolute w-52 h-64 bg-gray-300 shadow-md rounded-xl ">
        <div className="flex items-center w-full h-full flex-col justify-center">
          <img src="https://scontent.frdp4-1.fna.fbcdn.net/v/t39.30808-1/244993211_399906975184858_1087995824311746955_n.jpg?stp=dst-jpg_p480x480&_nc_cat=109&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=R4t3P7y-C8oAX8f83p2&_nc_ht=scontent.frdp4-1.fna&oh=00_AT-MV37G7a-6wB5OcAX7p9-dzCHxliudQ-fl7b99ZPMBjw&oe=624A1A00" alt="img"  className='overflow-hidden rounded-t-md w-full h-full'/>
          <p className=' rounded-b-xl bg-slate-50 w-full text-center p-4'>Syed Ziauddin</p>
        </div>
        <p className='text-center text-sm font-light text-white mt-2'>Last Activity</p>
      </div>
     <div className="absolute -z-10 w-full h-full">
            <video
            src={BgVideo}
            autoPlay
            muted
            controls={false}
            loop
            type="video/mp4" 
            className=' opacity-100 relative w-full h-screen object-cover'
            />
        </div>
    <div>
      <div className=" p-2 flex flex-col justify-between items-center ">
        <div>
          <img className="w-20" src={Logo} alt="logo"/>
          </div>
          <div className="text-center mt-5">
          <h1 className='text-xl text-white font-bold'>Login into Momento</h1>
        </div>
        </div>

        <div className=" flex flex-col justify-center items-center p-2">
          <div className="m-5 shadow-md border p-5 text-xl bg-white flex justify-between items-center text-center rounded-full">
            <FaUserAlt/>
            <input className='w-full px-2 border-none outline-none' type="text" placeholder='Username' />
            </div>
            
          <div className="m-5 shadow-md border p-5 text-xl bg-white flex  justify-between items-center text-center rounded-full">
            <AiFillLock/>
            <input className='w-full px-2 border-none outline-none' type="password" placeholder='Password' />
            </div>
          <div className="m-5 shadow-md border rounded-full bg-white  text-xl w-190 text-center">
            <button style={{
              background:'#30BAF1',
              color:'#fff'
            }} className="w-full h-full p-4 px-2 rounded-full" type="submit">Login</button>
            </div>

            <p className=" text-slate-900 ">OR</p>

            <hr className='w-350 border-t-1 border-neutral-400 border-dashed'/>

            <div className="flex">

            <div  className="flex cursor-pointer shadow-md border  items-center m-2 p-2 text-5xl bg-white rounded-full">
              <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
              render={(renderProps)=>(
                <button 
                  type='button'
                  className="outline-none cursor-pointer"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                <FcGoogle/>
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy='single_host_origin'
              />
            </div>

            <div style={{
              color:'#1DA1F2',cursor:'pointer'
            }} className="flex shadow-md border items-center m-2 p-2 text-5xl bg-white rounded-full">
            <AiFillTwitterCircle/>
            </div>

            <div style={{
              color:'#4267B2',cursor:'pointer'
            }} className="flex shadow-md border items-center m-2 p-2 text-5xl bg-white rounded-full">
            <BsFacebook/>
            </div>

            </div>
            <p className=" text-slate-900 mt-4 ">Don't have an account ?</p>
            <p className=" text-slate-900 "><b style={{color:'#30BAF1',cursor:'pointer'}}>
              <Link to="/register">
              Sign Up</Link>
            </b> instead !</p>
          </div>
    </div>
    </>
  )
}
export default Login;