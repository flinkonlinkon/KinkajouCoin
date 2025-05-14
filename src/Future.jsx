import React from 'react'
import youPay from './assets/Rectangle.png'
import Coin from './assets/KinkajouCoin.png'

export default function Future() {
  return (
    <div className='justify-evenly items-center flex mt-20'>
      
<div className='border-[#00CC55] border-2 rounded-[10px] border-solid w-[629px] h-[507px] text-center'>

<div className='border-[#FFFFFF] border-2 rounded-[44px] border-solid w-[537px] h-[45px] m-8 justify-center items-center'>

    <p className='text-center font-bold text-2xl text-[#FFFFFF]'>
        PRESALE LIVE
    </p>

</div>

<p className='text-[#00CC55] font-bold text-xl'>RAISED $45487 / $566465</p>

<p className='w-[463px] h-[13px] bg-gradient-to-r from-[#00CC55] via-[#79FF9E] to-[#00CC55] rounded-[15px] ml-16 mt-4'></p>

<div className='flex justify-between font-bold text-[#FFFFFF] w-[463px] ml-16 mt-3'>

<p>CURRENT PRICE: $0.002</p>
<p>NEXT STAGE PRICE: $0.002</p>

</div>

<p className='font-bold text-xl text-[#FFFFFF] mt-3'>Buy in before price increase!Listing soon</p>

<div className='w-[537px] h-[113px] flex justify-between mt-8 ml-10'>

<div className='w-[254px] h-[113px]'>

    <p className='text-[#FFFFFF] relative mr-44 text-[18px] mb-1'>You pay</p>
    <div className='w-254px h-75px border-[#00CC55] border-2 border-solid rounded-[5px] w-[254px] h-[75px] bg-[rgba(60,255,113,0.12)] flex justify-between items-center p-1'>

        <p className='text-[#FFFFFF] font-bold text-[26px]'>0</p>
        <img className='w-[25px] h-[25px]' src={youPay} alt="" />

    </div>



</div>

<div className='w-[254px] h-[113px]'>
        <p className='text-[#FFFFFF] relative mr-32 text-[18px] mb-1'>You Receive</p>
    <div className='w-254px h-75px border-[#00CC55] border-2 border-solid rounded-[5px] w-[254px] h-[75px] bg-[rgba(60,255,113,0.12)] flex justify-between items-center p-1'>

        <p className='text-[#FFFFFF] font-bold text-[26px]'>0</p>
        <img className='w-[25px] h-[25px]' src={Coin} alt="" />

    </div>
</div>

</div>


<button className='w-[537px] h-[60px] rounded-2xl font-bold text-[26px] text-[#FFFFFF] border-[#FFFFFF] border-2 border-solid mt-5 hover:bg-[#00CC55]'>Buy now</button>



</div>


<div className='w-[628px] h-[335px]'>
     <h1 className="text-5xl p-1 font-bold bg-gradient-to-r from-[#C5FFA9] to-[#00CC55] bg-clip-text text-transparent w-[597px] h-[180px]">
  KinkajouCoin: A <br></br> Greener Future in <br></br> Your Wallet
</h1>

<p className='text-[#C3C3C3] font-semibold'>
    Take control of your digital assets while supporting the planet.  KinkajouCoin is a forward-thinking cryptocurrency designed for sustainability, empowering eco-conscious transactions on the blockchain.
</p>
</div>


    </div>
  )
}
