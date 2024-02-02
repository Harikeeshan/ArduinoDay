import React from 'react'
import { Link, useLocation } from 'react-router-dom'

type Props = {}

const Swag = ({ }: Props) => {
  return (
    <div id="swag" className="my-20 md:my-8 md:pt-28 md:pb-36 relative">
      <div className='bg-70 h-[95%] md:h-[43%] lg:h-[50%] xl:h-[53%] w-full -z-50 absolute top-[8%] md:top-[24%] lg:top-[25%] xl:top-[23%]'></div>
      <div className='px-[15%] md:px-[8.33%] grid md:grid-flow-col gap-2'>
        <div className='place-items-center shrink md:w-80 lg:w-full'>
          <img src="./swagTee.png" alt="arduinoTshirt" className='' />
        </div>
        <div className='md:flex items-center '>
          <p className='space-y-3 text-left lg:space-y-6 '>
            <div className='text-5xl md:text-5xl lg:text-6xl  xl:text-[4.2rem] font-black text-80'>Grab Your</div>
            <div className='text-6xl md:text-7xl lg:text-8xl xl:text-[6.7rem] font-black text-10'>Arduino Tee</div>
            <div className="">
            <Link to={'https://payment-page.onepay.lk/redirect/PC2F1A351CE1'}>
              <button className="btn-4 border-80 lg:text-lg ">Shop Now</button>
              </Link>
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Swag