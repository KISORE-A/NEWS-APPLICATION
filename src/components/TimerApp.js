import React, { useEffect, useState } from 'react'

function TimerApp() {
    //state to store the seconds value
    const [seconds, setSeconds]=useState(0);

    //state to check whether the timer is running or not
    const [running, setRunning]=useState(false);

    //useEffect runs when running is true 
    useEffect(() =>{
        let timer;
        //if running is true
        if(running){
            timer= setInterval(() => {
                setSeconds (a=> a + 1);
            },1000);//each 1 seconds it will execute
        } return () => clearInterval(timer);
    },[running]);  // dependency array- run effect once the running value chnages


  return (
    <div>
        <h2>Timer Application</h2>
        <p> {seconds} Seconds</p>
        <button onClick={()=> setRunning(true)}>Start</button>
        <button onClick={()=> setRunning(false)}>Stop</button>
        <button onClick={()=> setSeconds(0)}>Reset</button>
    </div>
  )
}

export default TimerApp