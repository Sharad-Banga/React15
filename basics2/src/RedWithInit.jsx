//lazy initialization

import { useReducer } from "react"

function init(){
  console.log("this is only gonna work 1 time");
  let g = localStorage.getItem("count");
  if(g){
    console.log("found ",g);
    
    return parseInt(g);
  }
}

let state = 0;

function reducer(state , action){
  switch(action){
    case "increment":
      return state+1;
  }
}
export default function RedWithInit(){
  const [count , dispatch] = useReducer(reducer , state , init);
  return (
    <>
      <p>count : {count}</p>
      <button onClick={() =>dispatch("increment")}>increment</button>
      <button onClick={() =>dispatch("decrement")}>decrement</button>
      <button onClick={() =>dispatch("reset")}>reset</button>
    </>
  )
}