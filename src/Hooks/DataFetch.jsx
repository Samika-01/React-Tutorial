import React, { useEffect, useState } from 'react'
import { data, Link } from 'react-router-dom'

const DataFetch = () => {
    let [posts, setPosts] = useState([])

    useEffect(()=>{
        //fetch(url, options)
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.log(error))
        
    },[])


  return (
    <div className='flex flex-wrap justify-evenly'>
      {
        posts.length > 0 &&
        posts.map((post)=>{
            return <div className='p-5 w-1/4 m-5' key={post.id}>
                <Link to={`/post/${post.id}`}>
                <h1 className='underline font-bold text-xl'>{post.title}</h1>
                </Link>
                {/* <p>{post.body}</p> */}
                
            </div>
        })
      }
    </div>
  )
}

export default DataFetch
