import React from 'react';
import classesStyle from './Actions.module.css';

const Actions = ({togglePlay,playerState}) => {
    return (
        <div className= {classesStyle.actions}>
            <button onClick={togglePlay} 
                className={!playerState.isPlaying ? classesStyle.btn_play:classesStyle.btn_pause}>
            </button>
        </div>
    );
}

export default Actions;
