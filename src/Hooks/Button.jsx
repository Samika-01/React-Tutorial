import React from 'react'

const Button = ({text, color}) => {
  return (
    
      <button className='px-4 py-2' style={{
        color
        
      }}>
        {text}

      </button>
    
  )
}

export default Button
