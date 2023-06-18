'use client';

import React from 'react';
import Image from 'next/image';
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from 'react-parallax-mouse';

const Banner = () => {
  return (
    <section className=' bg-primary bg-pattern lg:min-h-[768px] pt-16 lg:pt-16'>
      <div className='container mx-auto min-h-[690px] 
      flex items-center justify-center'>
        <MouseParallaxContainer globalFactorX={0.4}  globalFactorY={0.3} resetOnLeave className='w-full flex flex-col lg:flex-row justify-between items-center'>
          <MouseParallaxChild factorX={0.1} factorY={0.2}>
            <div className='flex flex-col lg:flex-row items-center text-white
            text-center lg:text-left flex-1 px-6'>
              <div className='text-lg flex gap-1 lg:w-44 lg:-ml-6 py-2 Hero tracking-[0.03] cursor-default'>Best pizza in town</div>
              <h1 className='text-5xl lg:text-7xl Hero drop-shadow-md text-white cursor-default'>Pizza perfection<br /> in every bite</h1>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild className='relative' factorX={0.2} factorY={0.3}>
            <div className='flex flex-col lg:flex-row items-center text-center lg:text-left flex-1'>
              <div className='flex-1 flex justify-end max-w-sm lg:max-w-max'>
                <Image width={500} height={508} property={1} src={'/pizza-banner.png'} alt=''/>
              </div>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.3} factorY={0.4} className='absolute top-6 right-[400px] hidden xl:flex'>
            <Image 
            src={'/chilli-1.png'} 
            width={160} 
            height={84}  property={1} alt=''/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.3} factorY={0.4} className='absolute top-16 right-[450px] hidden xl:flex'>
            <Image 
            src={'/chilli-2.png'} 
            width={130} 
            height={84}  property={1} alt=''/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.3} factorY={0.4} className='absolute top-[22rem] right-[450px] hidden xl:flex'>
            <Image 
            src={'/garlic-2.png'} 
            width={100} 
            height={72}  property={1} alt=''/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.3} factorY={0.4} className='absolute top-96 right-[500px] hidden xl:flex'>
            <Image 
            src={'/garlic-3.png'} 
            width={100} 
            height={72} property={1} alt=''/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.2} factorY={0.3} className='absolute top-[18rem] right-[410px] hidden xl:flex'>
            <Image 
            src={'/leaves.png'} 
            width={100} 
            height={72} property={1} alt=''/>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </section>
  )
}

export default Banner