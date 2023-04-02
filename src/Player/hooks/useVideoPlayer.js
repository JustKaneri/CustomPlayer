import { useEffect, useState } from "react";

const useVideoPlayer = (videoElement) =>{

    
  const getVolume = () =>{
    let volume = localStorage.getItem('videoVolume');

    if(volume == null || volume < 0 || volume > 1){
      localStorage.setItem('videoVolume',0.5);
      return 0.5;
    }

    return volume;
  }

    const [playerState, setPlayerState] = useState({
        isPlaying: false,
        volume: getVolume(),
        progress: 0,
        speed: 1
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

    const handleOnTimeUpdate = () => {
        const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
        setPlayerState({
          ...playerState,
          progress,
        });
      };
    
      const handleVideoProgress = (event) => {
        const manualChange = Number(event.target.value);
        videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
        setPlayerState({
          ...playerState,
          progress: manualChange,
        });
      };
    
      
      const handleVideoSpeed = (speed) => {
        // const speed = Number(event.target.value);
        videoElement.current.playbackRate = speed;
        setPlayerState({
          ...playerState,
          speed,
        });
      };
    
      const handleVolume = (volume) => {
        localStorage.setItem('videoVolume',volume);
        setPlayerState({
          ...playerState,
          volume: volume
        });
      };
    
      useEffect(() => {
        videoElement.current.volume = parseFloat(playerState.volume);
      }, [playerState.volume, videoElement]);
    
      return {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleVideoSpeed,
        handleVolume,
      };
}

export default useVideoPlayer;