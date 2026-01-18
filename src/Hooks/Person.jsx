
import React from 'react'
import Button from './Button'

const Person = (props) => {
    // let name = props.name
    // let address = props.address
    // let phone = props.phone

    //destructuring object
    let {name, address, phone}=props


  return (
    <div className='my-5 shadow-lg p-5'>
      <h1>Name: {name}</h1>
      <h2>Address:{address}</h2>
      <h2>Phone: {phone} </h2>

      <Button text={'View Details'} color={'green'} ></Button>

    </div>
  )
}

export default Person
