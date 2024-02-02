import React from 'react'
import Home from './Home'

type Props = {}

const HomeCall = (props: Props) => {
    return (
        <div>
            <div className=''>
                <img src="/Ellipse 1.png" alt="Blur" className='absolute right-0 top-0 -z-10' />
                <img src="/Ellipse 7.png" alt="Blur" className='absolute top-[15rem] -z-10' />
                <img src="/Ellipse 5.png" alt="Blur" className='absolute top-[70rem] -z-10' />
                <Home />
            </div>
        </div>
    )
}

export default HomeCall