import { createContext, useContext } from "react"

const MusicContext = createContext();
const song = "love lost by talha anjum";

export default function Context(){
  return (
    <>
      <MusicContext value={song}>
        <p>
          <Home />
        </p>
      </MusicContext>
    </>
  )
}

function Home(){
  return (
    <>
      <Room />
    </>
  )
}

function Room(){
  return(
    <>
      <Bed />
    </>
  )
}

function Bed(){
  return(
    <>
      <Laptop/>
    </>
  )
}

function Laptop(){
  return(
    <>
      i am listening to  &nbsp;
     {  useContext(MusicContext)}
     &nbsp;
     on spotify
    </>
  )
}