
const useSizeScreen = () =>{
    
    const OpenFullScreen = (window) =>{
        if (window.requestFullscreen) 
            window.requestFullscreen();
        else if (window.webkitRequestFullscreen) 
            window.webkitRequestFullscreen();
        else if (window.msRequestFullScreen) 
            window.msRequestFullScreen();
    }

    const CloseFullScreen = () =>{
        try{
            if (document.fullscreenElement) {
                document.exitFullscreen();
              } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
              } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
              }
        }
        catch{
            console.log("Error not close fullScreen");
        }
        
    }

    return [OpenFullScreen,CloseFullScreen]
    
}

export default useSizeScreen;