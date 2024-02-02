import React, { useState, useEffect } from 'react';
import { motion as m } from 'framer-motion'

type CountdownProps = {
  targetDate: Date;
};

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  function calculateRemainingTime() {
    const currentTime = new Date().getTime();
    const difference = targetDate.getTime() - currentTime;
    return {
      // days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      // hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      // minutes: Math.floor((difference / 1000 / 60) % 60),
      // seconds: Math.floor((difference / 1000) % 60),

      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  const style = {
    counterHead: 'text-center text-80 text-4xl font-medium md:text-6xl ',
    dot: 'flex  font-medium text-4xl lg:text-6xl',
    counterLable: 'text-sm text-80/50 font-normal text-center my-2  md:text-lg',
  }


  return (

    <>
      <div className='flex flex-row gap-3 my-6'>
        <div>
          <h1 className={style.counterHead}>{remainingTime.days}</h1>
          <h3 className={style.counterLable}>Days</h3>
        </div>

        <div className={style.dot}>:</div>

        <div>
          <h1 className={style.counterHead}>{remainingTime.hours}</h1>
          <h3 className={style.counterLable}>Hours</h3>
        </div>

        <div className={style.dot}>:</div>

        <div className='text-center'>
          <h1 className={style.counterHead}>{remainingTime.minutes}</h1>
          <h3 className={style.counterLable}>Minutes</h3>
        </div>

        <div className={style.dot}>:</div>

        <div className='text-center'>
          <h1 className={style.counterHead}>{remainingTime.seconds}</h1>
          <h3 className={style.counterLable}>Seconds</h3>
        </div>
      </div>
    </>
  );
};

export default Countdown;
