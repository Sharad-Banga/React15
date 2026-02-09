import { useReducer } from "react"

function  reducer(state , action){
    return action;
  }


function UseStete(value){
  const [state , dispatch] = useReducer(reducer , value);
  function setState (x){
    dispatch(x);
  }
  return [state , setState];
}

export default function UseStateUsingReducer(){
  const [count , setCount ] = UseStete(1);
  return (
    <>
      <p>count : {count}</p>
      <button onClick={()=>setCount(count+1)}>incre</button>
    </>
  )
}