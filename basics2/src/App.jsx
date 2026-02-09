import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Red from './Red'
import RedWithInit from './RedWithInit'
import UseStateUsingReducer from './useStateUsingReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <RedWithInit /> */}
      {/* <UseStateUsingReducer />
       */}
       <UseStateUsingReducer/>
    </>
  )
}

export default App
