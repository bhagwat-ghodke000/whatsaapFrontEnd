import { duration } from '@mui/material';
import React, { use } from 'react'
import './ProgressBar.css'

const ProgressBar = ({ index, activeIndex }) => {
  const isActive = index === activeIndex;
  const [progress, setProgress] = React.useState();

    React.useEffect(() => {

        const interval = setInterval(() => {

            setProgress((prev) => {
                if(prev < 100){
                    return prev + 1;
                }
                clearInterval(interval);
                return prev;
            });
            
        },duration/100);
            
        
    }, [duration,activeIndex]);

       React.useEffect(() => {
        setProgress(0);
       }, [activeIndex]);


  return (
    <div className={`progress-bar-container ${isActive ? 'active' : ''}`}>
        <div className={`${isActive?'progress-bar':''}`} style={{width: `${progress}%`}}>
                
        </div>
    </div>
  )
}

export default ProgressBar