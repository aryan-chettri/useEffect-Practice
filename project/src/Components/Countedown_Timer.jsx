import React, { useState, useEffect, } from "react"

const Countedown_Timer = ({initialValue = 10}) => {

    const [timeRemaining, setTimeRemaining] = useState(initialValue);

    useEffect(()=>{
        
        const timer = setInterval(()=>{

            setTimeRemaining(prev =>{
                if(prev <= 1){
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);

    },[timeRemaining]);

  return (
    <div>
      <h1>Remaining Time : {timeRemaining}</h1>
    </div>
  )
}

export default Countedown_Timer
