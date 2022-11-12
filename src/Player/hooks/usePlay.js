import { useState, useEffect } from "react";

const usePlay = (handler)=>{
    
    const [IsKeyPressed,setIsKeyPressed] = useState(false);

    const DownHandler = (e)=>{
        if(e.code === 'Space' && e.target === document.body){
            e.preventDefault();
            handler();
            setIsKeyPressed(true);
        }
    }

    const UpHandler = (e) => {
        if(e.code === 'Space' && e.target === document.body){
            setIsKeyPressed(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('keydown',DownHandler);
        window.addEventListener('keyup',UpHandler);

        return()=>{
            window.removeEventListener('keydown',DownHandler);
            window.removeEventListener('keyup',UpHandler);
        }

    },[IsKeyPressed])
}

export default usePlay;