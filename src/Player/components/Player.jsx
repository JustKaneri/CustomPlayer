import React , {useRef} from 'react';
import useVideoPlayer from '../hooks/useVideoPlayer';


const Player = ({video}) => {

    const videoElement = useRef(null);

    const {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleVideoSpeed,
        toggleMute,
      } = useVideoPlayer(videoElement);

    const DruwLine = () => {

        if(videoElement.current !== null ){
            const value = Math.trunc(Number(videoElement.current.currentTime* 100 / videoElement.current.duration));
            const progress = Math.trunc(Number(value*100/70));
            console.log(progress);
            document.documentElement.style.setProperty("--range", progress + "%");
        }
            
        
    };

    return (
        <div className="container">
            <div className="video-wrapper">
                <video
                src={video}
                ref={videoElement}
                onTimeUpdate={handleOnTimeUpdate}
                />
                <div className="controls">
                <div className="actions">
                    <button onClick={togglePlay} 
                            className={!playerState.isPlaying ? "btn-play":"btn-pause"}>
                    </button>
                </div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={playerState.progress}
                    onChange={(e) => handleVideoProgress(e)}
                    onInput={DruwLine()}
                />
                <select
                    className="velocity"
                    value={playerState.speed}
                    onChange={(e) => handleVideoSpeed(e)}
                >
                    <option value="0.50">0.50x</option>
                    <option value="1">1x</option>
                    <option value="1.25">1.25x</option>
                    <option value="2">2x</option>
                </select>
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
