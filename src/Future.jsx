import React from 'react'
import youPay from './assets/Rectangle.png'
import Coin from './assets/KinkajouCoin.png'

export default function Future() {
  return (
    <div className='justify-evenly items-center flex mt-20'>
      
{/* <div className='border-[#00CC55] border-2 rounded-[10px] border-solid w-[629px] h-[507px] text-center'> */}
<div className="w-[629px] h-[507px] text-center border-2 border-[#00CC55] rounded-[10px] bg-gradient-to-br from-[#003311] via-[#002b0d] to-[#001e0a] shadow-[0_0_0px_0px_#00CC55]">


{/* <div className='border-[#FFFFFF] border-2 rounded-[44px] border-solid w-[537px] h-[45px] m-8 justify-center items-center'>
 */}
 <div className='border-[#FFFFFF] border-2 rounded-[44px] border-solid w-[537px] h-[45px] m-8 flex justify-center items-center bg-[rgba(255,255,255,0.05)]'>


    <p className='text-center font-bold text-2xl pt-1 text-[#FFFFFF] font-inter'>
        PRESALE LIVE
    </p>

</div>

<p className='text-[#00CC55] font-inter text-xl'>RAISED $45487 / $566465</p>

<p className='font-inter w-[463px] h-[13px] bg-gradient-to-r from-[#00CC55] via-[#79FF9E] to-[#00CC55] rounded-[15px] ml-16 mt-4'></p>

<div className='font-inter flex justify-between font-semibold text-[#FFFFFF] w-[463px] ml-16 mt-3'>

<p>CURRENT PRICE: $0.002</p>
<p>NEXT STAGE PRICE: $0.002</p>

</div>

<p className='font-inter font-semibold text-xl text-[#FFFFFF] mt-3'>Buy in before price increase!Listing soon</p>

<div className='w-[537px] h-[113px] flex justify-between mt-8 ml-10'>

<div className='w-[254px] h-[113px]'>

    <p className='text-[#FFFFFF] relative mr-44 text-[18px] mb-1 font-inter'>You pay</p>
    <div className='w-254px h-75px border-[#00CC55] border-2 border-solid rounded-[5px] w-[254px] h-[75px] bg-[rgba(60,255,113,0.12)] flex justify-between items-center p-1'>

     
 <input 
  type="number" 
  defaultValue={0}
  className="text-[#FFFFFF] font-bold text-[26px] font-inter bg-transparent border-none outline-none w-[80px] no-spinner"
/>


        
        <img className='w-[25px] h-[25px]' src={youPay} alt="" />

    </div>



</div>

<div className='w-[254px] h-[113px]'>
        <p className='text-[#FFFFFF] relative mr-32 text-[18px] mb-1 font-inter'>You Receive</p>
    <div className='w-254px h-75px border-[#00CC55] border-2 border-solid rounded-[5px] w-[254px] h-[75px] bg-[rgba(60,255,113,0.12)] flex justify-between items-center p-1'>

        <input 
  type="number" 
  defaultValue={0}
  className="text-[#FFFFFF] font-bold text-[26px] font-inter bg-transparent border-none outline-none w-[80px] no-spinner"
/>
        <img className='w-[25px] h-[25px]' src={Coin} alt="" />

    </div>
</div>

</div>


<button className='w-[537px] h-[60px] rounded-2xl font-bold text-[26px] text-[#FFFFFF] border-[#FFFFFF] border-2 border-solid mt-5 hover:bg-[#00CC55]'>Buy now</button>



</div>


<div className='w-[628px] h-[335px]'>
     <h1 className="text-5xl p-1 font-bold bg-gradient-to-r from-[#C5FFA9] to-[#00CC55] bg-clip-text text-transparent w-[597px] h-[180px] font-openSans">
  KinkajouCoin: A <br></br> Greener Future in <br></br> Your Wallet
</h1>

<p className='text-[#C3C3C3] font-semibold font-openSans'>
    Take control of your digital assets while supporting the planet.  KinkajouCoin is a forward-thinking cryptocurrency designed for sustainability, empowering eco-conscious transactions on the blockchain.
</p>
</div>


    </div>
  )
}
