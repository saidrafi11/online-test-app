import React, { useEffect, useState } from 'react';

const Name = () => {

    const [time, setTime] = useState({ hours: 2, minutes: 0, seconds: 0 });

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime((prevTime) => {
          let seconds = prevTime.seconds - 1;
          let minutes = prevTime.minutes;
          let hours = prevTime.hours;
  
          if (seconds < 0) {
            minutes -= 1;
            seconds = 59;
          }
  
          if (minutes < 0) {
            hours -= 1;
            minutes = 59;
          }
  
          if (hours < 0) {
            clearInterval(intervalId);
          }
  
          return { hours, minutes, seconds };
        });
      }, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
  
    return (
        <div className="my-auto">
            <h1>Time left: {time.hours}:{time.minutes < 10 ? `0${time.minutes}` : time.minutes}:{time.seconds < 10 ? `0${time.seconds}` : time.seconds} </h1>
            <h1>Name: Ankush Kumar</h1>

          </div>
    );
}


export default Name;