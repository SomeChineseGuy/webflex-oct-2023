/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import useDataFetch from "./useDataFetch";

const DataFetching = (props) => {
  const dog = useDataFetch(`https://dog.ceo/api/breeds/image/random`)
  const cat = useDataFetch(`https://catfact.ninja/fact`)
  
  return (
    <div>
      <h1>Data Fetching</h1>
      {cat.imageData.image && <h1>{cat.imageData.image}</h1>}
      <div>
        <p>The count is {cat.imageData.counter}</p>
        <button onClick={cat.increment}>Increment</button>
        <button onClick={cat.decrement}>Decrement</button>
      </div>

      {dog.imageData && <img src={dog.imageData.image} alt="dog picture" />}

      <div>
        <p>The count is {dog.imageData.counter}</p>
        <button onClick={dog.increment}>Increment</button>
        <button onClick={dog.decrement}>Decrement</button>
      </div>
    </div>
  )
};

export default DataFetching;
