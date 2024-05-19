"use client";

import React, { useEffect, useState } from "react";

const CountDownPage = () => {
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(50);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (seconds < 0) {
      setMinutes((prevMinutes) => prevMinutes - 1);
      setSeconds(59);
    }
    if (minutes < 0) {
      setHours((prevHours) => prevHours - 1);
      setMinutes(59);
    }
  }, [seconds, minutes]);
  return (
    <div className="bg-[#22A1F0] py-4 px-6 text-white rounded">
      <span className="countdown font-mono text-2xl space-x-4">
        <span style={{ "--value": hours } as React.CSSProperties}></span>h
        <span style={{ "--value": minutes } as React.CSSProperties}></span>m
        <span style={{ "--value": seconds } as React.CSSProperties}></span>s
      </span>
    </div>
  );
};

export default CountDownPage;
