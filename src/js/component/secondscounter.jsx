import React, { useState, useEffect } from "react";

const SecondsCounter = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(true);

    useEffect(() => {
      let interval;
      if (running) {
        interval = setInterval(() => 
          setTime(time + 1), 10);
        }
      else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running, time]);

    const seconds = Math.floor((time % 6000) / 100);

    let display = seconds.toString().padStart(7,"0");

    return (
      <>
      <div className="container d-flex align-items-center">
          <div><i className="fa-regular fa-clock"></i></div>
          <div className="counter">{display[0]}</div>
          <div className="counter">{display[1]}</div>
          <div className="counter">{display[2]}</div>
          <div className="counter">{display[3]}</div>
          <div className="counter">{display[4]}</div>
          <div className="counter">{display[5]}</div>
          <div className="counter">{display[6]}</div>
      </div>
      <div className="buttons container py-2 d-flex align-items-center">
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setRunning(true)}>Resume</button>
        <button onClick={() => setTime(0)}>Reset</button>       
      </div>
      </>
    );
  };

export default SecondsCounter;