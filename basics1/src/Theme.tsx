import { useState } from "react";


export default function Theme(){

  const [isDark , setIsDark] = useState(false);
  return (
    <>
    <div style={{
      height:"100vh", 
      width : "100vw",
      backgroundColor :isDark? "black":"white",
      color :isDark? "white":"black",
      display : "flex",
      justifyContent : "center",
      alignItems :"center"
    }}>

      hello
      <br />
      <button onClick={()=>setIsDark(a=>!a)}>Toggle</button>

    </div>
    </>
  )
}