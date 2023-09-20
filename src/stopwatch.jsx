import { useState, useEffect } from "react";


    
    const Stopwatch = () => {
        const [second, setSecond] = useState('00');
    const [minuts, setMinute] = useState('00');
    const [hour, setHour] = useState('00');
    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(0);
        useEffect( ()=>{
            let intervalId;
            if(isActive){
                intervalId = setInterval(() => {
                    const secondCounter = counter % 60;
                    const minuteCounter = Math.floor(counter / 60);
                    const hourCounter = Math.floor(counter / 60);
            
                    const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
                    const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;
                    const computedHour = String(minuteCounter).length === 1 ? `0${hourCounter}`: hourCounter;
                    setSecond(computedSecond);
                    setMinute(computedMinute);
                    setHour(computedHour);
                    setCounter(counter => counter + 1);
                  }, 1000)
            }
            return () => clearInterval(intervalId);
        }, [isActive, counter])
        function stopTimer() {
            setIsActive(false);
            setCounter(0);
            setSecond('00');
            setMinute('00');
            setHour('00')
          }
  return (
    <div className="sw">stopwatch
        <div>
        <div className="timer">
            <span className="hours">
                {hour}:
            </span>
            <span className="mints">
                {minuts}:
            </span>
            <span className="secound">
                {second}
            </span>
           
        </div>
        <div className='controlbutton'>
        <button onClick={() => setIsActive(!isActive)} className="start">
          {isActive ? "Pause": "Start"}
        </button>
        <button onClick={stopTimer} className="reset">Reset</button>
        </div>
        </div>
    </div>
  );
}

export default Stopwatch;