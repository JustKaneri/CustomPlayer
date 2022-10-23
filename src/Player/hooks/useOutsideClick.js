import { useEffect } from "react";

const useOutsideClick = (elementRef,handler,elementOpenRef)=> {

    useEffect(() => {
        function handleClickOutside(event) {
          if (elementRef.current && !elementRef.current.contains(event.target) && !elementOpenRef.current.contains(event.target)) {
            handler();
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [elementRef,elementOpenRef]);

}

export default useOutsideClick;