import React, { useEffect, useRef, useState } from "react";

import "../Styles/Myclock.css";
const Myclock = ({ hrs, mins, secs, startClock, start, mode,format,setter }) => {
  let [hr, setHrs] = useState(hrs);
  let [min, setMin] = useState(mins);
  let [sec, setSec] = useState(secs);
  let num=useRef(0)

  useEffect(() => {
    if (start) {
          sec<(mode?99:59)
          ? setTimeout(() => {
              if (Number(sec) < 9) {
                setSec("0" + (Number(sec) + 1));
              } else {
                setSec(Number(sec) + 1);
              }
            }, (mode?10:1000))
            : setTimeout(() => {
              setSec("00");
              if (min >= 59) {
                setMin("00");
                (num.current)++
                console.log(`${num.current} minutes passed`)
                if (hr < (mode?59:23)) {
                  if (Number(hr) < 9) {
                    setHrs("0" + (Number(hr) + 1));
                  } else {
                    setHrs(Number(hr) + 1);
                  }
                } else {
                  setHrs("00");
                }
              } else {
                if (Number(min) < 9) {
                  setMin("0" + (Number(min) + 1));
                  (num.current)++
                  console.log(`${num.current} minutes passed`)
                } else {
                  setMin(Number(min) + 1);
                  (num.current)++
                  console.log(`${num.current} minutes passed`)
                }
              }
            }, (mode?0:1000));
          }
      }, [start,mode,hr,sec,min]);
      
      return (
        <>
      <div className={`time ${start || mode ? "" : "hide"}`}>
        <span className="hrs">{hr}</span>:       
        <span className="mins">{min}</span><span>{mode ? "." : ":"}</span><span className="secs">{sec}</span>
        <span>{setter?(format?"pm":"am"):""}</span>
        <button
          className={` btns button ${mode ? "hide" : ""}`}
          onClick={() => {
            startClock(0);
          }}
        >
          Reset Time
        </button>
      </div>
      <div className={`${mode ? " btns" : "hide"}`}>
        {start ? (
          <button
            onClick={() => {
              startClock(0);
            }}
            className="button"
          >
            Stop Timer
          </button>
        ) : (
          <button
            onClick={() => {
              startClock(1);
            }}
            className="button"
          >
            {Number(sec) ? "Resume" : "Start"} Timer
          </button>
        )}
        {Number(sec) ? (
          start ? (
            ""
          ) : (
            <button
              className="button"
              onClick={() => {
                setHrs(hrs);
                setMin(mins);
                setSec(secs);
              }}
            >
              Reset Timer
            </button>
          )
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Myclock;
