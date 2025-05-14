import React from 'react'
import cf from './assets/cf.png'

export default function Card() {
  return (
    <div className='w-[428px] h-[417px] rounded-[10px] bg-[#0F4F2A]  p-6'>

        <div className=''>

        <h1 className='text-[18px] text-[#FFFFFF] mb-16 relative'>Buy KinkajouCoins</h1>
        </div>

        <div className='w-[318px] h-[156px] ml-11'>
            <img className='object-cover' src={cf} alt="" />
        </div>

        <p className='text-[14px] text-[#FFFFFF]'>Easily purchase KinkajouCoins through our platform or participating cryptocurrency exchanges. Our user-friendly interface guides you through the process, whether you are new to cryptocurrency or an experienced trader. </p>
      
    </div>
  )
}
