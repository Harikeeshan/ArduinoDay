import React, { useState, useEffect } from "react";
import IonIcon from "@reacticons/ionicons";
import { Link, useLocation } from "react-router-dom";
import { motion as m } from "framer-motion";



const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [currentRoute, setCurrentRoute] = useState('/');

  const location = useLocation();

  let [open, setOpen] = useState(false);

  useEffect(() => {
    setCurrentRoute(location.pathname.split("/")[1]);
    console.log(location.pathname.split("/")[1]);
  }, []);

  const path = {
    pathMethod: `block py-2 pl-3 pr-4 text-30 rounded md:hover:bg-transparent md:p-0 ${currentRoute != 'register' ? "md:hover:text-70" : ''} ${currentRoute === 'register' ? "text-80/20 cursor-not-allowed" : ''}   `
  }

  useEffect(() => {
    const element = document.getElementById('navBar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [])

  return (
    <m.div 
      id="navBar"
      className="mb-28">
      <div className=" w-full z-50 fixed top-0 left-0 bg-slate-100 py-6 lg:px-20 px-4 ">
        <div className=" lg:flex items-center justify-between mx-auto max-w-[1280px]">
          <div className="flex justify-between items-center ">
            <Link to={'/'}>
              <a>
                <img
                  src="/logo.svg"
                  className="h-12 mr-3 sm:h-[50px]"
                  alt="Arduino Logo"
                />
              </a>
            </Link>
            <div className="flex flex-row-reverse">

              <Link to={'/register'}>
                <button
                  type="button"
                  className="btn-1 mr-10 px-4 py-2  block lg:hidden"
                >
                  Register Now
                </button>
              </Link>
              <div
                onClick={() => setOpen(!open)}
                className="text-3xl absolute right-5 top-8 cursor-pointer lg:hidden"
              >
                <IonIcon
                  className="text-40"
                  name={open ? "close" : "menu"}
                ></IonIcon>
              </div>
            </div>
          </div>
          <ul
            className={`font-roboto text-[18px]  flex flex-col lg:flex-row gap-10 lg:gap-8 items-center  lg:py-0 py-12  absolute lg:static bg-slate-100 lg:bg-transparent lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 transition-all duration-500 ease-in-out ${open ? "top-20 h-screen" : "top-[-580px]"
              }`}
          >
            <li>
              <Link to={'/'}>
                <a
                  onClick={() => setActiveNav("#")}
                  className={`block py-2 pl-3 pr-4 text-30 rounded md:hover:bg-transparent md:hover:text-70 md:p-0  ${activeNav === "#" ? "text-70" : ""
                    }  `}
                >
                  Home
                </a>
              </Link>
            </li>
            <li>

              <a
                href="#agenda"
                onClick={() => setActiveNav("#agenda")}
                className={`${path.pathMethod} ${activeNav === "#agenda" ? "text-70" : ""
                  }`}
              >
                Agenda
              </a>

            </li>
            <li>
              <a
                href="#speakers"
                onClick={() => setActiveNav("#speakers")}
                className={`${path.pathMethod} ${activeNav === "#speakers" ? "text-70" : ""
                  }`}
              >
                Speakers
              </a>
            </li>
            <li>
              <a
                href="#sponsors"
                onClick={() => setActiveNav("#sponsors")}
                className={`${path.pathMethod} ${activeNav === "#sponsors" ? "text-70" : ""
                  }`}
              >
                Sponsors
              </a>
            </li>
            <li>
              <a
                href="#swag"
                onClick={() => setActiveNav("#swag")}
                className={`${path.pathMethod} ${activeNav === "#swag" ? "text-70" : ""
                  }`}
              >
                Shop 
              </a>
            </li>
            <li>
              <a
                href="#contactUs"
                onClick={() => setActiveNav("#contactUs")}
                className={`${path.pathMethod} ${activeNav === "#contactUs" ? "text-70" : ""
                  }`}
              >
                Contact Us
              </a>
            </li>
            <Link to={'/register'}>
              <button type="button" className="btn-1 mr-1 ml-6 hidden lg:block ">
                Register Now
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </m.div>
  );
};

export default Nav;
