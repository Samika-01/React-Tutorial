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
import Blogs from './Pages/Blogs'
import DataFetch from './Hooks/DataFetch'
import Post from './Hooks/Post'
import Recipe from './Hooks/Recipe'


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
    <Route path='blogs' element={<Blogs/>}/>
    </Route>
    <Route path='*' element= {<NotFound/>}/>
    <Route path='data' element = {<DataFetch/>}/>
    <Route path = 'post/:id' element= {<Post/>}/>
    <Route path = 'recipe/:id' element= {<Recipe/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
