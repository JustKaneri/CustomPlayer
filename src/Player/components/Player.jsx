import React , {useRef,useEffect,useState} from 'react';
import useVideoPlayer from '../hooks/useVideoPlayer';
import Actions from './actions/Actions';
import ProgressController from './progressController/ProgressController';
import SizeScreenController from './sizeScreeenController/SizeScreenController';
import SpeadController from './speadControler/SpeadController';
import VolumeController from './volumeController/VolumeController';

const Player = ({video}) => {

    const videoElement = useRef(null);
    const mainWindow = useRef(null);
    const [isVisible,setIsVisible] = useState(false);

    const {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleVideoSpeed,
        handleVolume,
      } = useVideoPlayer(videoElement);

    return (
        <div className="container">
            <div className="video-wrapper" ref={mainWindow} onMouseLeave={()=>setIsVisible(!isVisible)}>
                <video
                src={video}
                ref={videoElement}
                onTimeUpdate={handleOnTimeUpdate}
                />
                <div className="controls" >
                    <Actions
                        togglePlay={togglePlay}
                        playerState={playerState}
                    />
                    <ProgressController videoElement={videoElement}
                                        playerState={playerState}
                                        handleVideoProgress={handleVideoProgress}
                                        togglePlay={togglePlay}
                    />
                    <SpeadController value={playerState.speed}
                                    handleVideoSpeed={handleVideoSpeed}
                                    controlVisible={isVisible}
                    />
                    <VolumeController value={playerState.speed}
                                    handleVolume={handleVolume}
                                    controlVisible={isVisible}
                    />
                    <SizeScreenController mainWindow={mainWindow}
                                         setIsVisible ={setIsVisible}
                    />
                </div>
            </div>
        </div>
    );
}

export default Player;
