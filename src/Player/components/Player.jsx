import React , {useRef,useEffect,useState} from 'react';
import useVideoPlayer from '../hooks/useVideoPlayer';
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

    const SetProgress = () => {
        if(videoElement.current !== null ){
            const value = Number(videoElement.current.currentTime* 100 / videoElement.current.duration);
            document.documentElement.style.setProperty("--range", value + "%");
        }
    };

    useEffect(() => {
       if(playerState.progress == 100){
            console.log(playerState.progress);
            togglePlay();
            videoElement.current.currentTime = 0;
       }
    }, [playerState.progress]);

    return (
        <div className="container">
            <div className="video-wrapper" ref={mainWindow} onMouseLeave={()=>setIsVisible(!isVisible)}>
                <video
                src={video}
                ref={videoElement}
                onTimeUpdate={handleOnTimeUpdate}
                />
                <div className="controls" >
                    <div className="actions">
                        <button onClick={togglePlay} 
                                className={!playerState.isPlaying ? "btn-play":"btn-pause"}>
                        </button>
                    </div>
                    <div className="progress">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            className ="progress_bar"
                            value={playerState.progress}
                            onChange={(e) => handleVideoProgress(e)}
                            onInput={SetProgress()}
                        />
                    </div>
                    <SpeadController value={playerState.speed}
                                    handleVideoSpeed={handleVideoSpeed}
                                    controlVisible={isVisible}
                    />
                   <VolumeController value={playerState.speed}
                                    handleVolume={handleVolume}
                                    controlVisible={isVisible}
                   />
                   <SizeScreenController mainWindow={mainWindow}/>
                </div>
            </div>
        </div>
    );
}

export default Player;
