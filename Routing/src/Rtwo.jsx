import React from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'

function Rtwo() {
  return (
    <>
    <BrowserRouter >
      <Routes> 
        <Route path='/' element={<Layout/>}>
        <Route index element={<Landing/>} />
        <Route path='/cars' element={<Cars/>} />
        <Route path='/bikes' element={<Bikes/>} />
        <Route path='/planes' element={<Planes/>} />
        </Route>
      </Routes>
    </BrowserRouter>          
    </>
  )
}  


function Layout(){
  return(
    <>
    <nav>
        <Link to="/">Home</Link> &nbsp;
        <Link to="/cars">Cars</Link> &nbsp;
        <Link to="/Bikes">Bikes</Link> &nbsp;
        <Link to="/Planes">Planes</Link>

        </nav>
    <Outlet />
    </>
  )
}


function Landing(){
  return(
    <>
      <h2>This is Home Page</h2>
      <h2>Landing</h2>
    </>
  )
}

function Cars(){
  return(
    <>
      <h2>This is Cars Page</h2>
      <h2>CARS</h2>
    </>
  )
}


function Bikes(){
  return(
    <>
      <h2>This is Bikes Page</h2>
      <h2>Bikes</h2>
    </>
  )
}

function Planes(){
  return(
    <>
      <h2>This is Planes Page</h2>
      <h2>Planes</h2>
    </>
  )
}

export default Rtwo