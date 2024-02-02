import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

type Props = {}

function DayTwoRegulations({ }: Props) {
  return (
    <div>
      <NavBar />
      <div className='mt-32 sm:mt-44 sm:mb-16'>
        <div className='grid grid-flow-row md:grid-flow-col px-[8.33%] items-end gap-y-14 sm:gap-x-32 lg:gap-x-56 mb-16 sm:mb-32'>
          <div className=''><p className='space-y-5'>
            <div className='text-6xl sm:text-9xl text-70 font-semibold'>Day 2</div>
            <div className='text-3xl sm:text-4xl text-30 font-semibold'>Hackathon Challenge </div>
            <div className='text-80 sm:text-lg leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
          </p>
          </div>
          <div className='sm:text-right '>
            <p className='space-y-5'>
              <div className='text-3xl sm:text-4xl text-30 font-semibold'>*Rules & Regulations</div>
              <div className='text-80 sm:text-lg leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
            </p>
          </div>
        </div>

        <div className="bg-[url(/day1-background1.svg)] bg-cover py-20">
          <p className='text-center space-y-5 mx-[15%] sm:mx-[20%] '>
            <div className='text-6xl sm:text-9xl text-30 font-semibold'>Feeling Great ?</div>
            <div className='text-3xl sm:text-5xl text-70 font-semibold'>Then Let’s Register</div>
            <div><Link to={'/register'}><button className='btn-1 mt-10'>Register Now</button></Link></div>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DayTwoRegulations