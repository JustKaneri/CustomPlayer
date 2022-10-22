import React, { useEffect, useState } from 'react';
import styleClasses from './SpeadController.module.css';

const SpeadController = ({value,handleVideoSpeed}) => {

    const speedArray = [0.5,1,1.5,2];

    const [currentSpeed,setCurrentSpeed] = useState(value);
    const [isVisible,setIsVisible] = useState(false);

    useEffect(()=>{
        handleVideoSpeed(currentSpeed);
    },[currentSpeed]);

    return (
        <div>
            <div className={styleClasses.selectorSpead} 
                 style={{visibility: isVisible? 'visible' : 'hidden' }}>
                {speedArray.map((speed)=>
                    <span 
                        key={speed}
                        className={speed==currentSpeed
                                ? styleClasses.speadSelect
                                : styleClasses.speed}
                        onClick={()=>setCurrentSpeed(speed)}>
                            {speed}
                    </span>
                )}
            </div>
            <span className={styleClasses.speed} onClick={()=>setIsVisible(!isVisible)}>{value}x</span>
        </div>
    );
}

export default SpeadController;
