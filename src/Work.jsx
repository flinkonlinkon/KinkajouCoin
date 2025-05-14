import React from 'react'
import Card from './Card'
import cf from './assets/cf.png'

import cm from './assets/cm.png'

import am from './assets/am.png'


export default function Work() {
  return (
    <div className='text-center'>

        <h1 className='text-6xl font-semibold text-[#FFFFFF] mt-24'>How it works</h1>

        <div className='flex justify-evenly mt-24'>

            {/* 1st */}
            <div className='w-[428px] h-[417px] rounded-[10px] bg-[#0F4F2A]  p-6'>
            
                    <div className=''>
            
                    <h1 className='text-[18px] text-[#FFFFFF] mb-16 relative'>Buy KinkajouCoins</h1>
                    </div>
            
                    <div className='w-[318px] h-[156px] ml-11'>
                        <img className='object-cover' src={cf} alt="" />
                    </div>
            
                    <p className='text-[14px] text-[#FFFFFF]'>Easily purchase KinkajouCoins through our platform or participating cryptocurrency exchanges. Our user-friendly interface guides you through the process, whether you are new to cryptocurrency or an experienced trader. </p>
                  
                </div>

                {/* 2nd */}

                <div className='w-[428px] h-[417px] rounded-[10px] bg-[#0F4F2A]  p-6'>
                
                        <div className=''>
                
                        <h1 className='text-[18px] text-[#FFFFFF] mb-16 relative'>Support Green Projects and Land Conservation</h1>
                        </div>
                
                        <div className='w-[318px] h-[156px] ml-11'>
                            <img className='object-cover' src={am} alt="" />
                        </div>
                
                        <p className='text-[14px] text-[#FFFFFF]'>Every KinkajouCoin transaction contributes to purchasing carbon credits, securing land for conservation, and funding environmental sanctuaries. This ensures that your investment supports both immediate carbon offsetting and long-term environmental preservation.  </p>
                      
                    </div>

                    {/* 3rd */}

                    <div className='w-[428px] h-[417px] rounded-[10px] bg-[#0F4F2A]  p-6'>
                    
                            <div className=''>
                    
                            <h1 className='text-[18px] text-[#FFFFFF] mb-16 relative'>Watch Your Impact Grow</h1>
                            </div>
                    
                            <div className='w-[318px] h-[156px] ml-11'>
                                <img className='object-cover' src={cm} alt="" />
                            </div>
                    
                            <p className='text-[14px] text-[#FFFFFF]'>Our platform provides detailed reporting on the environmental impact of your investments. Track how your KinkajouCoins are contributing to specific projects, from reforestation efforts to wildlife protection, and see the physical land areas your investment helps protect </p>
                          
                        </div>
            
        </div>
      
    </div>
  )
}
