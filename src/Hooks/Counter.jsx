import React, { useEffect, useState } from 'react'

const Counter = () => {

    let [count, setCount] = useState(0)
    let [data, setData] = useState(100)


    useEffect(()=>{
        alert("Value updated")

    },[count, data])

    const addCount=() =>{
        setCount(++count)
        console.log(count)
    }

    const decreaseCount=()=>{
        setCount(--count)
    }

    const resetCount=()=>{
        setCount(0)
    }

    const increase=()=>{
        setData(data+10)
    }

    const decrease=()=>{
        setData(data-10)
    }

    const resetData=()=>{
        setData(100)
    }

  return (
    <div className='text-center'>
      <h1 className='text-center mt-6 text-2xl'>Count: {count} </h1>

      {
        count < 10 &&
        <button  onClick={addCount} className=' mt-6 btn btn-success'>Increase Count</button>
      }
            {
                count > 0 ?
                <button  onClick={decreaseCount} className=' mt-6 btn btn-warning'>Decrease Count</button>
                :
                <button  className=' mt-6 btn btn-warning disabled:'>Disabled</button>
            }

                  <button  onClick={resetCount} className=' mt-6 btn btn-info'>Reset Count</button>

                  <h1 className=' mt-6 text-2xl'>Data: {data}</h1>

                  <button className='btn btn-success' onClick={increase}>INCREASE DATA</button>
                  <button className='btn btn-error' onClick={decrease}>DECREASE DATA</button>
                  <button className='btn btn-primary' onClick={resetData}>RESET DATA</button>


    </div>
  )
}

export default Counter
