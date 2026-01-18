
import React, { useContext } from 'react'
import Person from './Person'
import {MyContext} from './MyContext'

const Room = () => {

    let message = useContext(MyContext)
  return (
    <div className='w-1/2 mx-auto '>
        {message}
      <Person name="Simran" address='Bhaktapur' phone= '9876543210' />
      <Person name="Ansa" address='Katunje' phone= '9876503210'/>
      <Person name="Samika" address='Kathmandu' phone= '9876003210'/>
    </div>
  )
}

export default Room
