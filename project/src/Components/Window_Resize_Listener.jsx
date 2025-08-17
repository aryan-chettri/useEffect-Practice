import React, {useState, useEffect} from 'react'

const Window_Resize_Listener = () => {

    const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight});
    
    useEffect(()=>{

        const handleResize = () => {
            setWindowSize({width: window.innerWidth, height: window.innerHeight
            })
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    },[]);


  return (
    <div>
      <p>Window Size: {windowSize.width} x {windowSize.height}</p>  
    </div>
  )
}

export default Window_Resize_Listener
