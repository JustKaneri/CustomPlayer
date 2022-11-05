import React, { useEffect, useState } from 'react';
import Actions from '../actions/Actions';
import ProgressController from '../progressController/ProgressController';
import SizeScreenController from '../sizeScreeenController/SizeScreenController';
import SpeadController from '../speadControler/SpeadController';
import VolumeController from '../volumeController/VolumeController';
import './Controls.css'

const Controls = ({controlParams}) => {
    
    const [classStyle,setClassStyle] = useState("controls controls-hidden");

    useEffect(()=>{
        if(controlParams.isVisible){
            setClassStyle("controls controls-visible");
        }
        else{
            setClassStyle("controls controls-hidden");
        }
    }, [controlParams.isVisible])
    
    return (
        <div className={classStyle}>
            <Actions
                togglePlay={controlParams.togglePlay}
                playerState={controlParams.playerState}
            />
            <ProgressController videoElement={controlParams.videoElement}
                                playerState={controlParams.playerState}
                                handleVideoProgress={controlParams.handleVideoProgress}
                                togglePlay={controlParams.togglePlay}
            />
            <SpeadController value={controlParams.playerState.speed}
                            handleVideoSpeed={controlParams.handleVideoSpeed}
                            controlVisible={controlParams.isVisible}
            />
            <VolumeController value={controlParams.playerState.speed}
                            handleVolume={controlParams.handleVolume}
                            controlVisible={controlParams.isVisible}
            />
            <SizeScreenController mainWindow={controlParams.mainWindow}
                                setIsVisible ={controlParams.setIsVisible}
                                isVisible={controlParams.isVisible}
            />
        </div>
    );
}

export default Controls;
