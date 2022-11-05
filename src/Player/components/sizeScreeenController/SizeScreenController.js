import React, { useEffect, useRef, useState } from 'react';
import useSizeScreen from '../../hooks/useSizeScreen';
import classesStyle from './SizeScreenController.module.css';

const SizeScreenController = ({mainWindow, setIsVisible,isVisible}) => {

    const [isFullScreen,setFullScreen] = useState(false);
    const buttonScren = useRef(null);
    const [OpenFullScreen,CloseFullScreen] = useSizeScreen();
    let timeout = useRef(null);

    useEffect(()=>{
        if(isFullScreen){
            OpenFullScreen(mainWindow.current);
            mainWindow.current.onmousemove=()=>{
                clearTimeout(timeout.current);
                setIsVisible(true);
                mainWindow.current.style.cursor = 'default';

                timeout.current = setTimeout(()=>{
                    setIsVisible(false);
                    mainWindow.current.style.cursor = 'none';
                }, 3000);
            }
        }
        else{ 
            clearTimeout(timeout.current);
            mainWindow.current.onmousemove=null; 
            mainWindow.current.style.cursor = 'default';      
            CloseFullScreen(mainWindow.current);
           
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