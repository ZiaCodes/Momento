import React from 'react'
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillLock } from 'react-icons/ai';
import Logo from '../assets/logo.png';
import { client } from '../client';


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
    <div>
      <div className=" p-2  flex flex-col justify-between items-center ">
        <div>
          <img className="w-20" src={Logo} alt="logo"/>
          </div>
          <div className="text-center mt-5">
          <h1 className='text-xl text-gray-900 font-bold'>Login into Momento</h1>
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
            <p className=" text-slate-900 "><b style={{color:'#30BAF1',cursor:'pointer'}}>SignIn</b> instead !</p>
          </div>
    </div>
  )
}
export default Login;