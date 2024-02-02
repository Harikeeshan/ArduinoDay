import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

type Props = {}

function DayOneRegulations({ }: Props) {
  return (
    <div>
      <NavBar />
      <div className='mt-32 sm:mt-44 sm:mb-16'>
        <div className='grid grid-flow-row md:grid-flow-col px-[8.33%] items-end gap-y-14 sm:gap-x-32 lg:gap-x-56 mb-16 sm:mb-32'>
          <div className=''><p className='space-y-5'>
            <div className='text-6xl sm:text-9xl text-70 font-semibold'>Day 1</div>
            <div className='text-3xl sm:text-4xl text-30 font-semibold'>Hackathon Challenge </div>
            <div className='text-80 sm:text-lg leading-5'>First day, Hackathon challenge will be held for the participants. The second day will include educational seminars on Aurdino and speakers by experts in the field.  At the end of Arduino day 2023, the winners of the hackathon challenge will be given gifts.    </div>
          </p>
          </div>
          <div className='sm:text-right '>
            <p className='space-y-5'>
              <div className='text-3xl sm:text-4xl text-30 font-semibold'>*Rules & Regulations</div>
              <div className='text-80 sm:text-lg leading-5'>* All contestants must arrive on time.

                                                            * A group can have only three members.

                                                            * School children should be of the relevant age group.

                                                            * Participating university students must bring their university ID card.

                                                            * The hardware components we provide should be used with caution.

                                                            * Must attend after registering. (This is not applicable for emergency reasons)</div>
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

export default DayOneRegulations