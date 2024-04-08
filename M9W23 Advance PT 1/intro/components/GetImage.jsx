"use client"

import React, {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import Simple from './Simple';

const GetImage = () => {
  const [counter, setCounter ] = useState(0);
  const [url, setUrl] = useState("")
  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then((res) => {
      console.log(res.data.message);
      setUrl(res.data.message)
    })

  }, [counter])
  
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <div className='m-10'>
        <button onClick={increment} className='bg-green-600 border-red-100 rounded py-1 px-2 mx-2'>Increment</button>
        <button onClick={decrement}  className='bg-green-600 border-red-100 rounded py-1 px-2'>Decrement</button>
      </div>
      <img src={url} width={500} />
      <Simple /> 
    </div>
  )
};

export default GetImage;
