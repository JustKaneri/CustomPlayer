import React, { useEffect, useRef, useState } from 'react';
import useSizeScreen from '../../hooks/useSizeScreen';
import classesStyle from './SizeScreenController.module.css';

const SizeScreenController = ({mainWindow, setIsVisible,isVisible}) => {

    const [isFullScreen,setFullScreen] = useState(false);
    const buttonScren = useRef(null);
    const [OpenFullScreen,CloseFullScreen] = useSizeScreen();
    let timeout;

    useEffect(()=>{
        if(isFullScreen){
            OpenFullScreen(mainWindow.current);
            mainWindow.current.onmousemove=()=>{
                clearTimeout(timeout);
                setIsVisible(true);
                mainWindow.current.style.cursor = 'default';

                timeout = setTimeout(()=>{
                    setIsVisible(false);
                    mainWindow.current.style.cursor = 'none';
                }, 3000);
            }
        }
        else{        
            CloseFullScreen(mainWindow.current);
            mainWindow.current.onmousemove=null;  
        }   
    },[isFullScreen])

    

    return (
        <div>
            <button ref={buttonScren} className={isFullScreen? classesStyle.button_screen_min :classesStyle.button_screen_max}
                    onClick={()=>setFullScreen(!isFullScreen)}>
            </button>
        </div>
    );
}

export default SizeScreenController;