import { useState } from "react"

export function Counter(){

  const [count , setCount] = useState(0);

  function handleIncrement(){
    setCount(count => count+1);
  }

  function handleDecrement(){
    setCount(count-1);
  }

  return(
    <>
      <h1>Counter : {count}</h1> 
      <br />
      <br />
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <br />
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}