import React, {useState} from "react";

const Counter = () => {
  const [counter, setCounter ] = useState(0);
  const [obj , setObj ] = useState({})
  const decrement = () => {
    setCounter(counter - 1)
  }

  const increment = () => {
    setCounter((prev)=> {
      console.log(prev);
      return prev + 1
    })
    setCounter((prev)=> {
      console.log(prev);
      return prev + 1
    })
    setCounter((prev)=> {
      console.log(prev);
      return prev + 1
    })
  }

  console.log('fire!');

  return (
    <div>
      <h1>The count is: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
};

export default Counter;
// First Render
// Counter()

// // after the first render
// Counter()
// Counter()
// Counter()