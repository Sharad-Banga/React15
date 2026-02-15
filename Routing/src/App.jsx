import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rone from './Rone'
import Rtwo from './Rtwo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Rtwo />
    </>
  )
}

export default App
