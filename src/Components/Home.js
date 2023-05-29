import React from 'react'
import image from '../assets/image_nature.jpg'

const Home = () => {
  return (
    <main>
      <img src={image} alt="img" className='absolute object-cover w-full h-full'/>
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-6xl font-bold text-green-100 cursive loading-none lg:loading-snug home-name'>Hello. I'm Adarsh</h1>
      </section>
    </main>
  )
}

export default Home
