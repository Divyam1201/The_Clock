import React, { useState } from "react";
import Digitalclock from "./components/Digitalclock";
import Myclock from "./components/Myclock";

import"./Styles/App.css"

const App = () => {
  let [format,setFormat]=useState(0);
  let [setter,setSetter]=useState(0);
  let data = [{ hrs: "00", mins: "00", sec: "00" }];
  let [timer, setTimer] = useState(data);
  
  let [hide,setHide]=useState(0)
  let[mode,setMode]=useState(0)
const [start, setStart] = useState(0);
let clock = (forms) => {
  let modify={...forms}
      for (var key in modify){
        if(modify[key]<10){

          modify[key]="0" + (Number(modify[key]))
        }
        
      }
      setTimer([{...modify}])
      
    
  
  // setTimer([{...forms}]) 
};
let startClock = (startit) => {
  setStart(startit)
};
let handleTime=()=>{
setHide(1)
setMode(0)
setStart(0)
}
let handleWatch= ()=>{
 if(mode===0){setStart(0)}
  setHide(1)
  setMode(1)
  setTimer(data)

}
let home=()=>{
setHide(0)
setMode(0)
setStart(0)
}
const amPm=(ampm)=>{
  setFormat(ampm)
  
}
const digitalsetter=(Setter)=>{setSetter(Setter)
}

  return (
    <div className="main">
    
    <div className="head">

  <button className="btn" onClick={handleTime} >Digital Clock</button>
      <button className={`${hide?"mainhead": "hide"}`} onClick={home}>The Clock</button>
  <button className="btn" onClick={handleWatch}>StopWatch</button>
    </div>
    <div className={`${hide?"hide": "home"}`} onClick={home}>

    <h1>WELCOME</h1>
    <h3>to</h3>
    <h2><u>The Clock</u></h2>
    </div>

    <h1 className={`${start?"colors":""} ${hide?"":"hide"}`} >{ mode?"StopWatch" : "Digital Clock"}</h1>
     {
mode===hide?
"":
      <Digitalclock
        clock={clock}
        startbtn={startClock}
        start={start}
        amPm={amPm}
        digitalsetter={digitalsetter}
      ></Digitalclock>
     }
      {timer.map((i) => {
        return (
          <Myclock
            key={i.sec}
            hrs={i.hrs}
            mins={i.mins}
            secs={i.sec}
            start={start}
            startClock={startClock}
            mode={mode}
            format={format}
            setter={setter}
          ></Myclock>
        );
      })}
    
    </div>
  );
};

export default App;
