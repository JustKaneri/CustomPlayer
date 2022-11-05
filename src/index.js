import React from "react";
import Player from './Player/components/Player'

const ReactPlayer= props => {
  const {video} = props
  return (
    <Player video={video}/>
  );
};

export default ReactPlayer;