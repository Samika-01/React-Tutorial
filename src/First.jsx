import React from 'react'
import { useParams } from 'react-router-dom'

const First = () => {
  return (
    <div>
      First
    </div>
  )
}

export default First

//rafce, rafc, rfc, rfce



export const Second = () => {
    let params = useParams()
    let name = params.user
  return (
    <div>
        <h1>

      Welcome , {name}
        </h1>
    </div>
  )
}








