import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      The page doesnot exist. Go to <Link to={'/'}>HOME</Link>
    </div>
  )
}

export default NotFound
