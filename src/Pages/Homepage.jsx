import React, { useContext } from 'react'
import MyCarousal from '../Components/MyCarousel'
import { MyContext } from '../Hooks/MyContext'

const Homepage = () => {
  let message = useContext(MyContext)
  return (
    <>
    {message}
      <MyCarousal/>
    </>
  )
}

export default Homepage
