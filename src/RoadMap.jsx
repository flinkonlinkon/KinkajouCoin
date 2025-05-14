import React from 'react'
import bg from './assets/bg.png'

export default function RoadMap() {
  return (
    <div 
    className="bg-cover bg-center h-screen w-full"
  style={{ backgroundImage: `url(${bg})` }}
    >
        <h1 className='text-5xl text-[#EEEEEE]'>Roadmap Highlights</h1>

        <p className='text-[#EEEEEE]'>We're on a mission, and this is just the beginning. The Matrix won’t know what hit it. Here's our game plan to dominate the crypto space</p>
      
    </div>
  )
}
