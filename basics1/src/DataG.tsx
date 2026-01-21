import { use, useState } from "react";
import {sculptureList} from "./data"


export default function DataG(){
  const [index , setIndex] = useState(0);


  const scuplture = sculptureList[index];
  return (
    <>
      <h2>{scuplture.name}</h2>
      <p>{scuplture.artist}</p>
      <img src={scuplture.url} alt="" />
      <button onClick={() => setIndex(i=>i+1)}>Next</button>
    </>
  )
}