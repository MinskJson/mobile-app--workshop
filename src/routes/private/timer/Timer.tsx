import React, { useEffect, useState, useCallback } from "react";
import { Page } from "../../../components/page/Page";
import './timer.css';

const getFormatedDataTime = () => {
  const date = new Date();
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  }
}

const getCurrentTime = () =>{
  const [currentTime, setCurrentTime] = useState(getFormatedDataTime());

  useEffect(() => {
    const interval = setInterval(()=> {
      setCurrentTime(getFormatedDataTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return currentTime;
}

const Clock = () => {
  const currentTime = getCurrentTime();

  return <div className='clock'>
    {currentTime.hours}:{currentTime.minutes}:{currentTime.seconds}
  </div>
}

const AnalogClock = () => {
  const currentTime = getCurrentTime();

  return <div className="analog__wr">
    <div className='analog'>
      <div
        className='analog-hours'
        style={{transform: `rotate(${(360 / 12 * (currentTime.hours % 12) + 90)%360 }deg)`}}
      />
      <div
        className='analog-minutes'
        style={{transform: `rotate(${(360 / 60 * (currentTime.minutes % 60) + 90)%360}deg)`}}
      />
      <div
        className='analog-seconds'
        style={{transform: `rotate(${(360 / 60 * (currentTime.seconds % 60) + 90)%360}deg)`}}
      />
    </div>
  </div>
}

const Timer = () => {
  return <Page>
    <Page.Header/>
    <Page.Content>
      <Clock />
      <AnalogClock />
    </Page.Content>
    <Page.Footer/>
  </Page>
};

export {
  Timer
}