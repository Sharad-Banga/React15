import { useReducer } from "react"

const initialState = 0;

function reducer(state , action){
  switch(action){
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
  }
}

export default function Red(){

  const [count , dispatch ] = useReducer(reducer , initialState)
  return(
    <>
      <p>count : {count}</p>
      <button onClick={() =>dispatch("increment")}>increment</button>
      <button onClick={() =>dispatch("decrement")}>decrement</button>
      <button onClick={() =>dispatch("reset")}>reset</button>
    </>
  )
}