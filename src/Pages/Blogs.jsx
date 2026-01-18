import React, { useContext } from 'react'
import { MyThemeContext } from '../App'

const Blogs = () => {
    let theme = useContext(MyThemeContext)
  return (
    <div className='p-10'>
      <div className={`w-1/2 p-10 ${theme == "Light" ? `bg-slate-100` : `bg-slate-700`} `}>
        <h1 className={`text-2xl font-bold ${theme == "Light" ? `text-slate-600` : `text-slate-100`}`}>Blog Title</h1>
        <p className={` ${theme == "Light" ? `text-slate-600` : `text-slate-100`}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ad, quo atque, accusamus fugiat delectus inventore quidem fuga provident repellendus nulla magni alias? A nobis iste mollitia ut dolorum ipsum.
        </p>
        <h3 className={`text-xl font-bold`}>Author, Date</h3>
      </div>
    </div>
  )
}

export default Blogs
