import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import First, { Second } from './First'
import NotFound from './NotFound'
import Layout from './Components/Layout/Layout'
import Homepage from './Pages/Homepage'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Counter from './Hooks/Counter'
import Room from './Hooks/Room'


const MyRoutes = () => {
  return (
    <BrowserRouter>

    <Routes>

        <Route path='/' element = {<Layout/>}>

    <Route index element={<Homepage/>}/>
    <Route path='/second' element={<Second/>}/>
    <Route path='/second/:user' element={<Second/>}/>
    <Route path='services' element = {<Services/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='count' element={<Counter/>}/>
    <Route path='room' element={<Room/>}/>
    </Route>
    <Route path='*' element= {<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
