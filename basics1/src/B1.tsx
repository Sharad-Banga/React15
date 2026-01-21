export default function B1(){

  return(
    <>
      <Card onBtn1={()=>{alert("btn 1")}} onBtn2={()=>{alert("btn 2")}}  />
    </>
  )
}


function Card({onBtn1, onBtn2}: {onBtn1: () => void, onBtn2: () => void}){
  return (
    <>
      <button onClick={onBtn1}>btn 1</button>
      <button onClick={onBtn2}>btn 2</button>
    </>
  )
}