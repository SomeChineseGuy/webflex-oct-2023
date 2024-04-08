"use client"

import React, {useState} from "react";
import { useEffect } from "react";
import axios from 'axios';

const name = () => {
  const [input, setInput ] = useState("")
  
  const handleSubmit = () => {
    axios.put("http://localhost:3000/api/users")
    .then((res) => {
      console.log(res);
    })
    console.log(input);
  }
  
  return (
    <div>
      <h1>Please type in your name</h1>
      <label htmlFor="">Name</label>
      <input type="text" val={input} onChange={e => setInput(e.target.value)} className="border-2 border-cyan-100" />
      <button className="bg-green-600 border-red-100 rounded py-1 px-2'" onClick={handleSubmit}>Submit</button>
    </div>
  )
};

export default name;
