import React from 'react'

import x from './assets/x.png'
import d from './assets/d.png'
import ins from './assets/ins.png'
import tic from './assets/tic.png'

export default function Contrac() {
  return (
    <div className='text-center mt-24'>

        <h1 className='text-5xl text-[#FFFFFF] font-semibold mb-8 font-montserrat'>Contact Us</h1>

        <p className='text-[#EEEEEE] font-montserrat'>Email us at <p className='text-[#00FF06] font-montserrat'>support@kinkajoucoin.com</p> for any 
queries or support</p>

<div className='flex gap-3 justify-center items-center mt-6'>
<img className='hover:bg-[#00FF06] rounded-full' src={x} alt="" />
<img className='hover:bg-[#00FF06] rounded-full' src={d} alt="" />
<img className='hover:bg-[#00FF06] rounded-full' src={ins} alt="" />
<img className='hover:bg-[#00FF06] rounded-full' src={tic} alt="" />
</div>

<div className="h-[2px] w-full bg-gradient-to-r from-[#060609] via-[#00FF06] to-[#060609] mt-6 mb-4"></div>


<div className='flex gap-7 text-xs'>
    <p className='text-[#FFFFFF] font-montserrat'>Privacy Policy</p>
    <p className='text-[#FFFFFF] font-montserrat'>Cookie Policy</p>
</div>
      
    </div>
  )
}
