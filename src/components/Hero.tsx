import React from 'react'
import { Link } from 'react-router-dom'
import Countdown from './Countdown'
import { motion as m } from 'framer-motion'

type Props = {}

function Hero({ }: Props) {
  return (
    <div className='m-5 flex flex-row justify-center items-center'>
      <div className='flex lg:gap-32 flex-col md:flex-row '>
        <m.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          className='md:flex flex-col justify-center'>
          <h3 className='text-70 font-medium md:text-2xl mt-10'>2023 MAR 24 - 25</h3>
          <h1 className='uppercase text-30 font-bold text-7xl md:text-8xl' >Arduino Day</h1>

          <Countdown targetDate={new Date('2023-03-24T00:00:00')} />

          <div>
            <Link to={'/register'}>
              <button className='btn-1'>Register Now</button>
            </Link>
          </div>
        </m.div>

        <m.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          className='mt-8 lg:h-[500px]'>
          <img loading='lazy' src="/hero-img.png" alt="Hero Image" />
        </m.div>
      </div>
      {/* test comment */}
    </div>
  )
}

export default Hero