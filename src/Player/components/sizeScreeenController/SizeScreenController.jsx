import React, { useEffect, useRef, useState } from 'react';
import classesStyle from './SizeScreenController.module.css';

const SizeScreenController = ({mainWindow}) => {

    const [isFullScreen,setFullScreen] = useState(false);
    const buttonScren = useRef(null);

    useEffect(()=>{
        if(isFullScreen){
            OpenFullScreen(mainWindow.current);
        }
        else{
            CloseFullScreen(mainWindow.current);
        }

        
    },[isFullScreen])

    function OpenFullScreen(window){
        if (window.requestFullscreen) 
            window.requestFullscreen();
        else if (window.webkitRequestFullscreen) 
             window.webkitRequestFullscreen();
        else if (window.msRequestFullScreen) 
            window.msRequestFullScreen();
    }

    function CloseFullScreen(){

        if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
          }
    }
    return (
        <div>
            <button ref={buttonScren} className={isFullScreen? classesStyle.button_screen_min :classesStyle.button_screen_max}
                    onClick={()=>setFullScreen(!isFullScreen)}>
            </button>
        </div>
    );
}

export default SizeScreenController;