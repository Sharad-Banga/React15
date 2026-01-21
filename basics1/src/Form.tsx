import { use, useState } from "react"


export default function Form(){

  const [data , setData] = useState({
    firstName : "sharad",
    lastName : "banga",
    email : "sharadiit03@gmail.com"
  })

  function handleFirstChange(e:any){
    setData({
      ...data , 
      firstName : e.target.value
    })
  }

  function handleLastChange(e:any){
    setData({
      ...data , 
      lastName : e.target.value
    })
  }

  function handleEmailChange(e:any){
    setData({
      ...data , 
      email : e.target.value
    })
  }

  return (
    <>
        firstName : 
        <input type="text" onChange={handleFirstChange} />
        <br />
        lastName : 
        <input type="text" onChange={handleLastChange} />
        <br />
        email : 
        <input type="text" onChange={handleEmailChange} />
        alertt:
        <button onClick={()=>{alert(data.firstName + " " + data.lastName +" "+data.email)}}>alert</button>
    </>
  )
}