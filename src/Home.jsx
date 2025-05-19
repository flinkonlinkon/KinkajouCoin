import React from 'react'
import CountdownTimer from './CountdownTimer'
import homePic from './assets/homePic.png'

export default function Home() {
  return (
    <div className='flex mt-10 justify-evenly'>
      <div className='mt-6'>
        <h1 className="text-5xl p-1 font-bold bg-gradient-to-r from-[#C5FFA9] to-[#00CC55] bg-clip-text text-transparent w-[597px] h-[180px] font-openSans">
  KinkajouCoin: A Greener Future in Your Wallet
</h1>

<p className='w-[662px] h-[144px] text-[#C3C3C3] font-poppins mb-12'>
    KinkajouCoin is not just another cryptocurrency—it's a movement toward sustainability and environmental stewardship. By integrating blockchain technology with carbon credits and real land ownership, we offer a unique opportunity for individuals and businesses to invest in a greener future. Our goal is to create a positive environmental impact while providing a secure and innovative financial asset. 
</p>

<h3 className='text-[#C3C3C3] text-2xl font-extrabold font-montserrat mt-4 mb-3'>Crypto Market Starts in</h3>

<div className='relative left-[-20px]'>
<CountdownTimer></CountdownTimer>
</div>



      </div>

      <div>
        <img src={homePic} alt="" />
      </div>
    </div>
  )
}
