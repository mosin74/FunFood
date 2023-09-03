import { useEffect, useState } from "react"

export const useOnline = () => {

    const [isOnline, setIsOnline] = useState(true);

    const handleOnline = () => {
        setIsOnline(true);
    }

    const handleOfline=() => {
        setIsOnline(false);
    }
    useEffect(() => {
        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOfline);

        return () => {
            removeEventListener("online",handleOnline);
            removeEventListener("offline",handleOfline);
        }
    }, [])
    return isOnline;

}

export default useOnline;