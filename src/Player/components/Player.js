import React , {useRef,useState} from 'react';
import useVideoPlayer from '../hooks/useVideoPlayer';
import Controls from './controls/Controls';
import './PlayerStyle.css'

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

    const ControlParams = {playerState: playerState,
                           videoElement:videoElement,
                           isVisible:isVisible,
                           mainWindow: mainWindow,
                           setIsVisible:setIsVisible,
                           togglePlay: togglePlay,
                           handleVideoProgress:handleVideoProgress,
                           handleVideoSpeed:handleVideoSpeed,
                           handleVolume:handleVolume};

    return (
        <div className="container">
            <div className="video-wrapper" ref={mainWindow}
                 onMouseLeave={()=>setIsVisible(false)} 
                 onMouseEnter={()=>setIsVisible(true)}>
                <video
                src={video.src}
                poster={video.poster}
                ref={videoElement}
                onTimeUpdate={handleOnTimeUpdate}
                />
                <Controls
                    controlParams={ControlParams}
                />
            </div>
        </div>
    );
}

export default Player;
