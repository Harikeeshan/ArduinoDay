import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  // Set the target date for March 22, 2024, at midnight LOCAL TIME
  const targetDate = new Date(2025, 2, 22, 0, 0, 0); // (Month is 0-based, so 2 = March)

  const calculateRemainingTime = () => {
    const currentTime = new Date().getTime();
    const targetTime = targetDate.getTime();
    const difference = targetTime - currentTime;

    // if (difference <= 0) {
    //   return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Stop at zero
    // }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-row gap-3 my-6">
      {Object.entries(remainingTime).map(([label, value], index) => (
        <React.Fragment key={label}>
          {index > 0 && <div className="flex font-medium text-4xl lg:text-6xl">:</div>}
          <div className="text-center">
            <h1 className="text-80 text-4xl font-medium md:text-6xl">{value}</h1>
            <h3 className="text-sm text-80/50 font-normal my-2 md:text-lg">{label}</h3>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Countdown;
