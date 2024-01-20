"use client"
import React, { useEffect, useState } from 'react';
import hedSt from '../pages/header/header.module.scss';
import Link from 'next/link';
import Scroll from '../pages/scroll/page'
const Header = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  function getCurrentTime() {
    const date = new Date();
    const h = date.getHours(); // 0 - 23
    const m = date.getMinutes(); // 0 - 59
    const s = date.getSeconds(); // 0 - 59
    let session = 'AM';

    let hours = h;
    if (hours === 0) {
      hours = 12;
    }

    if (hours > 12) {
      hours -= 12;
      session = 'PM';
    }

    return `${hours < 10 ? '0' + hours : hours}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s} ${session}`;
  }

  return (
    <div id='header' className={hedSt.Header}>
      {/* <div id="MyClockDisplay" className={hedSt.clock}>
        {time}
      </div> */}
    </div>
  );
};

export default Header;