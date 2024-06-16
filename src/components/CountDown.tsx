// components/Countdown.tsx
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string; // Assuming targetDate is a string in ISO format
}

interface TimeLeft {
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function calculateTimeLeft(): TimeLeft {
    const now = new Date();
    const difference = new Date(targetDate).getTime() - now.getTime();

    if (difference < 0) {
      return {
        minutes: 0,
        seconds: 0,
      };
    }

    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      minutes,
      seconds,
    };
  }

  return (
    <div className="text-center mx-[12px]">
      <div className="text-4xl font-bold">
        {timeLeft.minutes.toString().padStart(2, '0')}:{timeLeft.seconds.toString().padStart(2, '0')}
      </div>
      {/* <p className="text-gray-600">Minutes : Seconds</p> */}
    </div>
  );
};

export default Countdown;
