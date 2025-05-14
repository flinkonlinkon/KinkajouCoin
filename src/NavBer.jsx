import React from 'react'

import navPic from './assets/navLogo.png';


export default function NavBer() {
  return (
    <div className='w-full bg-[#07070A] flex justify-between'>

        <img className='w-[306px] h-[60px]' src={navPic} alt="" />

        <div className='flex gap-8 items-center'>
            <p className='text-[#EEEEEE] hover:text-[#00FF06] font-semibold'>Home</p>
            <p className='text-[#EEEEEE] hover:text-[#00FF06] font-semibold'>About</p>
            <p className='text-[#EEEEEE] hover:text-[#00FF06] font-semibold'>Tokenomics</p>
            <p className='text-[#EEEEEE] hover:text-[#00FF06] font-semibold'>Roadmap</p>
            <p className='text-[#EEEEEE] hover:text-[#00FF06] font-semibold'>FaQ</p>
            <button className='bg-gradient-to-r from-[#C5FFA9] to-[#3CFF71] text-[#040F00] font-semibold py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition-all duration-300 w-[149px] h-[47px]"'>Connect Wallet</button>
        </div>
        

      
    </div>
  )
}
