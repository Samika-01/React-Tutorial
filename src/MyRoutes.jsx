import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import First, { Second } from './First'
import NotFound from './NotFound'
import Layout from './Components/Layout/Layout'

const MyRoutes = () => {
  return (
    <BrowserRouter>

    <Routes>

        <Route path='/' element = {<Layout/>}>

    <Route index element={<First/>}/>
    <Route path='/second' element={<Second/>}/>
    <Route path='/second/:user' element={<Second/>}/>
    
    </Route>
    <Route path='*' element= {<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
