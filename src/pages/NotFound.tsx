import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <div className='flex flex-col justify-center items-center h-screen p-10 md:px-10 lg:px-20'>
      <img loading='lazy' className='md:w-[300px] lg:w-[400px]' src="/notfound-img.png" alt="Error 404" />
      <h1 className='text-2xl text-center font-bold mt-12 md:text-3xl lg:text-4xl'>The page that you are <br /> searching is <span className='text-70'>not found !</span></h1>
      <Link to={'/'}>
        <button className='btn-1 mt-8'>Back To Home</button>
      </Link>
    </div>
  )
}

export default NotFound