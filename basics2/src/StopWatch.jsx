import { useRef, useState } from "react"
export default function StopWatch(){
  const [time , setTime] = useState(0);
  let int ;
  const IntervalRef = useRef(null);
  function Start(){
    if(IntervalRef.current!=null) return;
    IntervalRef.current = setInterval(()=>{
      setTime((prev)=>prev+1);
    },1000)
  }
  function Stop(){
    clearInterval(IntervalRef.current);
  }
  return(
    <>
    <p>time : {time}</p>
    <button onClick={Start}>Start</button>
    <button onClick={Stop}>Stop</button>
    </>
  )
}