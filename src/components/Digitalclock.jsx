import React, { useState } from "react";

import "../Styles/Digitalclock.css";
const Digitalclock = ({ clock, startbtn, start,amPm,digitalsetter }) => {
  const timer = {
    hrs: "",
    mins: "",
    sec: ""
  };
  let [setter,setSetter]=useState(0);
  let [time, setTime] = useState(timer);
  const onSubmit=(e) => {
    e.stopPropagation();
    e.preventDefault();
     
    
      
    switch (setter) {
      case 0:
        if (time.mins && time.sec) {
          clock(time); 
          startbtn(1);

        } else {
          alert("Fill all the fields");
        }
        
        break;
    
        case 1:
        if (time.hrs && time.mins && time.sec) {
          clock(time); 
          startbtn(1);
        } else {
          alert("Fill all the fields");
        }
        break;
      default:
       
          alert("Fill all the fields");
       
        break;
    }

    // startbtn(1)
    setTime(timer);
  };
  const handleHalf=()=>{
    setTime(timer);
    setSetter(1)
    digitalsetter(1)
  }
  const handleFull=()=>{
    setTime(timer);
    setSetter(0)
    digitalsetter(0)
    
  }
  const handleChange = (e) => {
    e.stopPropagation();
    let max,min;
    if(e.target.name==="hrs"){
      if(setter){
        max=12;
        min=null;
      }
      else{
        
        max=23;
        min=0;
      }
      setTime({...time,[e.target.name]:Math.max(min,Math.min(max,Number(e.target.value.slice(0,2))))})
    }
    else{ 
      
      let max=59;
      let min=0;
      setTime({...time,[e.target.name]:Math.max(min,Math.min(max,Number(e.target.value.slice(0,2))))})
    }
    };
  const handlesetter=(e)=>{
    let set=e.target.selectedIndex-1
      amPm(set)
 }
  return (
    <>
      <form className={start ? "hide" : ""}>
        <input
        
          type="number"
          name="hrs"
          placeholder="hours"
          onChange={handleChange}
          value={time.hrs}
 
        />{" "}
        :
        <input
          type="number"
          name="mins"
          placeholder="minutes"
          onChange={handleChange}
          value={time.mins}
         />{" "}
        :
        <input
          type="number"
          name="sec"
          placeholder="seconds"
          onChange={handleChange}
          value={time.sec}
        />
       {setter? <select name="" id="am-pm" onChange={handlesetter}>
        <option hidden defaultValue={"Select am pm..."}>Select am pm...</option>
          <option value="am">am</option>
          <option value="pm">pm</option>
        </select>:""}
        <label id="half">Select Time Format : 
        <input type="radio" name="timesetter" id="" onChange={handleHalf} /> 12hrs
        <input type="radio" name="timesetter" id="" onChange={handleFull} /> 24hrs
        </label>
        <button onClick={onSubmit} className={start ? "hide" : ""}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Digitalclock;
