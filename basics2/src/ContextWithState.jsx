import { use } from "react";
import { createContext, useContext, useState } from "react"

const StateContext = createContext();


export default function ContextWithState(){
  const [count , setCount] = useState(1);


  const passingValue = {
    count , 
    setCount
  }
  return (
    <>
      <StateContext.Provider value={passingValue}>
        <Home/>
      </StateContext.Provider>
    </>
  )
}

function Home(){
  return(
    <>
      <Room/>
    </>
  )
}

function Room(){
  return(
    <>
      <Bed/>
    </>
  )
}


function Bed(){
let g = useContext(StateContext);

  return(
    <>
      the count is {g.count}
      <button onClick={()=>g.setCount(c=>c+1)}>+</button>
    </> 
  )
}