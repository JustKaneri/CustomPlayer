import React,{useEffect} from 'react';
import classesStyle from './ProgressController.module.css';

const ProgressController = ({videoElement,playerState,handleVideoProgress,togglePlay}) => {

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
        <div className={classesStyle.progress}>
            <input
                type="range"
                min="0"
                max="100"
                className = {classesStyle.progress_bar}
                value={playerState.progress}
                onChange={(e) => handleVideoProgress(e)}
                onInput={SetProgress()}
            />
        </div>
    );
}

export default ProgressController;
