import {useEffect, useState} from 'react';


const DocumentTitle = () => {
  const [counter, setCounter ] = useState(0);
  // console.log('Render and Rerender');

  
  // Render and a Rerender
  useEffect(() => {
    console.log('Initial Render and Rerender');
    document.title = `counter : ${counter}`
    const intervalRef = setInterval(() => {
      console.log('Can you see this message?');
    }, 1000);

    const cleanUp = () => {
      clearInterval(intervalRef)
    }

    return cleanUp()
  })

  // Render
  useEffect(() => {
    console.log('Inital render only');
  }, [])

  // Initial Render and whenever the value in the array is update, run again 
  useEffect(() => {
    console.log('Inital render and watching the counter state');
  }, [counter])

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }
  return (
    <div>
      <p>The count is {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default DocumentTitle;

