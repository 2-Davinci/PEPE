import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'

const Home = () => {
  return (
    <div className='flex flex-col justify-center'>
        <NavBar/>
        <Hero/>
    </div>
  )
}

export default Home