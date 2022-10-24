import React, { useEffect, useRef, useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import classesStyle from './VolumeController.module.css';

const VolumeController = ({value,handleVolume,controlVisible}) => {

    const [currentVolume,setCurrentVolume] = useState(value*100);
    const [isVisible,setIsVisible] = useState(false);
    const panel = useRef(null);
    const btnOpen = useRef(null);


    useEffect(()=>{
        handleVolume(currentVolume/100);

        document.documentElement.style.setProperty("--rangeVolume", currentVolume + "%");

    },[currentVolume]);

    useEffect(()=>{
        if(isVisible) panel.current.style.transform = "scale(1,1)";
        else panel.current.style.transform = "scale(0,0)";       
    },[isVisible])

    useEffect(()=>{
        setIsVisible(false);
    },[controlVisible])



    useOutsideClick(panel,()=>setIsVisible(false),btnOpen);

    return (
        <div>
            <div ref={panel} className={classesStyle.selectorVolume}>
                <input
                    type="range"
                    min="0"
                    max="100"
                    className ={classesStyle.volume}
                    value={currentVolume}
                    onInput={(e)=>{setCurrentVolume(e.target.value)}}
                />
            </div>
            <button ref={btnOpen} className={classesStyle.button_volume} onClick={()=>setIsVisible(!isVisible)}></button>
        </div>
    );
}

export default VolumeController;
