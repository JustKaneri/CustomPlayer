import { useEffect, useState } from "react";

const useVideoPlayer = (videoElement) =>{
    const [playerState, setPlayerState] = useState({
        isPlaying: false,
        isMute: false,
        progress: 0,
        spead: 1
    });

    const togglePlay = () => {
        setPlayerState({
          ...playerState,
          isPlaying: !playerState.isPlaying,
        });
    };

    useEffect(() => {
        playerState.isPlaying
          ? videoElement.current.play()
          : videoElement.current.pause();
    }, [playerState.isPlaying, videoElement]);
}

export default useVideoPlayer;