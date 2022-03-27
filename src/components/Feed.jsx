import React, {useState, useEffect} from 'react';
import { userQuery } from '../utils/data';
import { client } from '../client';
import {AiFillEye} from 'react-icons/ai';
import {FiDownload} from 'react-icons/fi';
import {RiShareForwardFill} from 'react-icons/ri';
const Feed = () => {
  const [user, setUser] = useState(null);
    const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

  useEffect(() => {
    const query = userQuery(userInfo?.googleId);

    client.fetch(query).then((data) => {
      setUser(data[0])
    })
  }, []);
  return (

    <div className='flex justify-center items-center my-5 '>
      <p>Hello world</p>
    </div>
  )
}

export default Feed