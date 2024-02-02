import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

type Props = {}

const Footer = ({ }: Props) => {

  const [currentRoute, setCurrentRoute] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setCurrentRoute(location.pathname.split("/")[1]);
    console.log(location.pathname.split("/")[1]);
  }, []);

  const path = {
    pathMethod: `block py-2 pl-3 pr-4 text-30 rounded md:hover:bg-transparent md:p-0 ${currentRoute != 'register' ? "md:hover:text-70" : ''} ${currentRoute === 'register' ? "text-80/20 cursor-not-allowed" : ''}   `
  }

  return (
    <footer>
      
      <div className="p-10 bg-[#F9F9F9] text-30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">

            <div className="mb-5 items-center text-center md:items-start md:text-left flex flex-col py-4 mx-auto w-full ">
              <div className="pb-4">
                <span className="text-[47px] font-medium sm:text-center">
                  ARDUINO DAY<br />2023
                </span>
              </div>
              <div className="text-80 text-[12px] font-normal opacity-60 pb-[20px]">
                <span className="text-left">
                Arduino Day is a global celebration of the 
                open-source electronics platform, Arduino, which has revolutionized 
                the way people learn and interact with technology. The event is celebrated worldwide 
                on the same day, and in Sri Lanka, it provides an opportunity for electronics enthusiasts, 
                makers, and students to come together and share their passion for Arduino and its capabilities.
                </span>
              </div>

              <div className="">
                <Link to={'/register'}>
                  <button className="btn-1">Register Now</button>
                </Link>
              </div>

            </div>

            <div className="mb-5 text-center h-[100%] flex justify-center text-30 text-[18px] font-[400] items-center py-[20px]">
              <ul>
                <li className="hover:text-70 pb-2">
                  <Link to={'/'}>
                    <a>Home</a>
                  </Link>
                </li>
                <li className={path.pathMethod}><a href="#">Agenda</a></li>
                <li className={path.pathMethod}><a href="#">Speakers</a></li>
                <li className={path.pathMethod}><a href="#">Sponsors</a></li>
                <li className={path.pathMethod}><a href="#">Our Teams</a></li>
                <li className={path.pathMethod}><a href="#">Contact Us</a></li>
              </ul>
            </div>

            <div className="text-30 flex justify-center items-center h-[100%] py-[20px] ">
              <div>
                <div className="text-[16px] font-[600] pb-4 text-center">
                  <span>FOLLOW US ON</span>
                </div>
                <div className="flex mb-7 items-center justify-center gap-[22px]">
                  <a href="#"><img src="/facebook-icon.svg"></img></a>
                  <a href="#"><img src="/linkedin-icon.svg"></img></a>
                  <a href="#"><img src="/twitter-icon.svg"></img></a>
                  <a href="#"><img src="/youtube-icon.svg"></img></a>
                </div>
              </div>
            </div>

            <div className="text-30 flex justify-center items-center h-[100%] p-auto">
              <div>
                <div className="text-[20px] font-[500] pb-1 items-center text-center py-[20px]">
                  <span>Organized By</span>
                </div>
                <div>
                  <a href="#">
                    <img className="pt-[12px] mb-10 mx-auto" src="/arduino-sl-logo.png" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="w-full bg-white text-black opacity-[0.6] text-[14px] font-[400] px-10">
        <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
          <div className="text-center">
            © 2023 Arduino Day | All Rights Reserved | <Link to={"/dmca"}> <button> DMCA Removal </button> </Link>| <Link to={'/privacyPolicy'}> <button> Privacy Policy </button> </Link>
          </div>
          <div className="text-right">
            &lt; Made by Dev Team of Arduino Day with ❤️ /&gt;
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer