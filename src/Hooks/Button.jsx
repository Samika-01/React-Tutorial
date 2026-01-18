import React from 'react'

const Button = ({text, color, onClick}) => {
  return (
    
      <button className='px-4 py-2' style={{
        color
        
      }} onClick={onClick}>
        {text}

      </button>
    
  )
}

export default Button
