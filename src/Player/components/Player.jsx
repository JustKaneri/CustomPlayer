import React , {useRef,useEffect,useState} from 'react';
import useVideoPlayer from '../hooks/useVideoPlayer';
import SpeadController from './speadControler/SpeadController';


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
        toggleMute,
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
            <div className="video-wrapper" onMouseLeave={()=>setIsVisible(!isVisible)}>
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
                    <button className="mute-btn" onClick={toggleMute}>
                        {!playerState.isMuted ? (
                        <i className="bx bxs-volume-full"></i>
                        ) : (
                        <i className="bx bxs-volume-mute"></i>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Player;
