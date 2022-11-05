import React, { useEffect, useRef, useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import styleClasses from './SpeadController.module.css';

const SpeadController = ({value,handleVideoSpeed,controlVisible}) => {

    const speedArray = [0.5,1,1.5,2];
    
    const [currentSpeed,setCurrentSpeed] = useState(value);
    const [isVisible,setIsVisible] = useState(false);
    const panel = useRef(null);
    const btnOpen = useRef(null);

    useEffect(()=>{
        handleVideoSpeed(currentSpeed);
    },[currentSpeed]);

    useEffect(()=>{
        if(isVisible) panel.current.style.transform = "scale(1,1)";
        else panel.current.style.transform = "scale(0,0)";       
    },[isVisible])

    useEffect(()=>{
        setIsVisible(false);
    },[controlVisible])

    useOutsideClick(panel,()=>setIsVisible(false),btnOpen);

    return (
        <div className={styleClasses.controller}>
            <div className={styleClasses.selectorSpead}
                 ref={panel}
                 style={{visibility: isVisible? 'visible' : 'hidden' }}
                 > 
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
            <span ref={btnOpen} className={styleClasses.speed} onClick={()=>setIsVisible(!isVisible)}>{value}x</span>
        </div>
    );
}

export default SpeadController;
