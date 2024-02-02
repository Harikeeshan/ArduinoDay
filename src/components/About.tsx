import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion'


type Props = {}

function About({ }: Props) {
  return (

    <section>
      <Marquee
        gradient={false}
        speed={40}
        pauseOnClick={true}
        pauseOnHover={false}
        className='flex justify-between my-11 lg:mt-[7rem]'
      >

        <p className="mq_txt mr-11"> Artificial intelligence </p>
        <p className="mq_txt mx-11"> Robotics </p>
        <p className="mq_txt mx-11"> internet of things </p>
        <p className="mq_txt mx-11"> Big Data </p>
        <p className="mq_txt mx-11"> Cloud Computing </p>
        <p className="mq_txt mx-11"> Robotics </p>
        <p className="mq_txt mx-11"> internet of things </p>
        <p className="mq_txt mx-11"> Artificial intelligence </p>
        <p className="mq_txt mx-11"> Robotics </p>
        <p className="mq_txt mx-11"> internet of things </p>
        <p className="mq_txt mx-11"> Cloud Computing </p>

      </Marquee>
      <div className='flex flex-col md:flex-row gap-7 px-5 lg:flex-row justify-center lg:mt-[6rem] lg:mb-[6rem]'>
        <div className='flex flex-col gap-7 md:flex-col lg:flex-row'>
          <div className='md:flex md:justify-center'>
            {/* card 1 */}
            <m.div

              className="flex">
              <div
                className="flex flex-col gap-5 justify-center lg:w-[45rem] md:w-[31.6rem] rounded-lg bg-30 px-10 pt-5 pb-9">
                <h5
                  className="mb-2 text-xl font-medium text-white">
                  Are you ready to unlock your creativity? <br /> adipiscing elit.
                </h5>
                <p className="mb-0 text-white font-light">
                Arduino Day 2023 is just around the corner and we at arduino community srilanka are excited to bring you some 
                creative content to celebrate!  Register for hackathons, educational seminars and inspiration to help you explore 
                the endless possibilities of this amazing platform.
                </p>

                <Link to={'/register'}>
                  <button
                    type="button"
                    className="btn-2 mt-5">
                    Register Now
                  </button>
                </Link>

              </div>
            </m.div>
            {/* card 1 */}
          </div>

          <m.div
            
            className='flex flex-col md:flex-row gap-7'>
            {/* card-2 */}
            <m.div
              className="flex">
              <div
                className="w-[100%] h-[25rem] md:w-[15rem] md:max-h-[20rem] rounded-lg border-30 border-2 px-8 pt-5 pb-9 flex justify-between card-two">
                <h5
                  className="mb-2 text-xl font-medium text-30">
                  Hackathon <br />Challenge
                </h5>
                <Link to={'/dayone-regulations'}>
                  <ArrowForwardIcon className='text-30 mt-2' />
                </Link>
              </div>
            </m.div>
            {/* card-2 */}


            {/* card-3 */}
            <div className="flex">
              <div
                className="w-[100%] h-[25rem] md:h-[20rem] md:w-[15rem] rounded-lg border-30 border-2 px-8 pt-5 pb-9 flex justify-between card-three">
                <h5
                  className="mb-2 text-xl font-medium text-30">
                  Speaker <br />Session
                </h5>
                <Link to={'/daytwo-regulations'}>
                  <ArrowForwardIcon className='text-30 mt-2' />
                </Link>
              </div>
            </div>
            {/* card-3 */}
          </m.div>
        </div>

      </div>
    </section>

  )
}

export default About;