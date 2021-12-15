import { useEffect, useState } from "react";

//Custom hook for hiding & showing some element at a certain resolution
export default function useResize(targetResolution: number){
    const [flag,setFlag] = useState(false);

    useEffect(() => {
        const check = () => {
            if(window.innerWidth <= targetResolution){
                setFlag(true);
            }else {
                setFlag(false);
            }
        }

        check();
        window.addEventListener('resize',check);
        return () => window.removeEventListener('resize',check);
    },[]);

    return [flag];
}