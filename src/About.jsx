import React from 'react'
import forest from './assets/forest.png'

export default function About() {
  return (
    <div className='flex justify-evenly mt-24'>

        <div className='w-[628px] h-[376px]'>
             <h1 className="text-[63px] p-1 font-bold bg-gradient-to-r from-[#C5FFA9] to-[#00CC55] bg-clip-text text-transparent w-[597px] h-[180px] mt-2 mb-3">
  About
KinkajouCoin
</h1>

<p className='text-[#C3C3C3] mb-5 mt-5'>
    At KinkajouCoin, we envision a world where economic growth and environmental sustainability go hand in hand. Our mission is to harness the power of cryptocurrency to create a financial ecosystem that rewards responsible stewardship of the Earth's resources. We believe in transparency, accountability, and positive action—values that are reflected in everything we do. 
</p>

 <button className='bg-gradient-to-r from-[#C5FFA9] to-[#3CFF71] text-[#040F00] font-semibold py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition-all duration-300 w-[149px] h-[47px]"'>Contact Us</button>

        </div>

        <div>
            <img src={forest} alt="" />
        </div>
      
    </div>
  )
}
