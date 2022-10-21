import React from 'react';

const Player = ({video}) => {
    return (
        <div>
          <video
              src={video}/>
        </div>
    );
}

export default Player;
