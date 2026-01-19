import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Recipe = () => {
    let params = useParams()
    let id = params.id

    let [post, setPost] = useState({})

    let[loading, setLoading] = useState(false)

    useEffect(()=>{

        setLoading(true)
        //axios.get(URL, options)
        axios.get(`https://dummyjson.com/recipes/${id}`)
        .then(response => setPost(response.data))
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
    },[])
  return (
    <div className='w-1/2 p-10 m-auto bg-slate-600 rounded-2xl shadow-2xl'>
        {
            loading ? <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div> :
        <>


      <h1 className='text-center text-3xl font-bold underline'>{post.name}</h1>

        <img src={post.image} alt="" className='h-96 my-5 mx-auto ' loading='lazy' />
      <h1 className=' text-xl font-bold'> Ingredients: </h1>
      <ul className='list-disc text-xl'>
        {
          post?.ingredients?.length > 0 &&
        post?.ingredients.map(item => {
          return <li> {item} </li>
        })
        }
        </ul>

        
      <h1 className=' text-xl font-bold mt-5 '> Instructions: </h1>
      <ol className='list-decimal text-xl'>
        {
          post?.instructions?.length > 0 &&
        post?.instructions.map(item => {
          return <li> {item} </li>
        })
        }
        </ol>




      <p className='text-2xl text-justify mt-5'>
        <b> Preparation Time: </b>{post.prepTimeMinutes} minutes </p>


        <p className='text-2xl text-justify mt-5'>
        <b> Servings: </b>{post.servings} persons </p>

        <p className='text-2xl text-justify mt-5'>
        <b> Cuisine: </b>{post.cuisine} cuisine </p>

        <p className='text-2xl text-justify mt-5'>
        <b> Calories: </b>{post.caloriesPerServing}  </p>

        <p className='text-2xl text-justify mt-5'>
        <b> Tags: </b> 
        {
          post?.tags?.length > 0 &&
        post?.tags.map(item => {
          return <span> {item} </span>
        })
        }
        </p>
      </>
        }
    </div>
  )
}

export default Recipe
