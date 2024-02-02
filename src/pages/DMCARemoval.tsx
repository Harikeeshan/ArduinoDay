import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

type Props = {}

const DMCARemoval = (props: Props) => {
    return (
        <div>
            <div>
                <NavBar />
                <div className='mt-32 sm:mt-44 sm:mb-16'>
                    <div className='grid grid-flow-row md:grid-flow-col px-[8.33%] items-end gap-y-14 sm:gap-x-32 lg:gap-x-56 mb-16 sm:mb-32'>
                        <div className=''><p className='space-y-5'>
                            {/* <div className='text-6xl sm:text-9xl text-70 font-semibold'>Privacy Policy</div> */}
                            <div className='text-3xl sm:text-4xl text-30 font-semibold'>DMCA Removal</div>
                            <div className='text-80 sm:text-lg leading-5'>
                                This is information for anyone that wishes to challenge our “fair use” of the copyrighted
                                material. <br /><br />
                                <a href="https://en.wikipedia.org/wiki/Digital_Millennium_Copyright_Act" target="_blank" className='underline font-medium'> DMCA </a> <br /><br />
                                The Digital Millennium Copyright Act (DMCA) was signed into law by President Clinton on
                                October 28, 1998. The legislation implements two 1996 World Intellectual Property
                                Organization (WIPO) treaties: the WIPO Copyright Treaty and the WIPO Performances and
                                Phonograms Treaty. The DMCA also addresses a number of other significant copyright-related
                                issues. <br /><br />
                                If you are a legal copyright holder or a designated agent for such and you believe that content
                                residing on or accessible through our website infringes a copyright and falls outside the
                                boundaries of “Fair Use”, please send a notice of infringement by contacting us at
                                <span className='font-medium'> tiroshmenuka2000@gmail.com </span> <br /><br />
                            </div>

                            <div className='text-3xl sm:text-4xl text-30 font-semibold'>We will respond and take necessary action immediately.</div>
                            <div className='text-80 sm:text-lg leading-5'>
                                This is information for anyone that wishes to challenge our “fair use” of the copyrighted
                                material. <br /><br />
                                <a href="https://en.wikipedia.org/wiki/Digital_Millennium_Copyright_Act" target="_blank" className='underline font-medium'> DMCA </a> <br /><br />
                                If notice is given of an alleged copyright violation we will act expeditiously to remove or disable
                                access to the material(s) in question. <br /><br />
                                All 3rd party material posted on this website is copyright of the respective owners/authors.
                                arduinodaymrduino.com makes no claim of copyright on such material.
                            </div>
                        </p>
                        </div>

                    </div>


                </div>
                <Footer />
            </div>
        </div>
    )
}

export default DMCARemoval