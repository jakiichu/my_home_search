import {useEffect, useState} from "react";

export const useSpace = (key: string = ' ') => {
    const handleKeydown = (e: KeyboardEvent) => {
        console.log(key)
        if (e.key === key)
            setIsSpace(true)
    }
    const handleKeyup = () => {
        setIsSpace(false)
    }
    const [isSpace, setIsSpace] = useState(false)

    useEffect(() => {
        addEventListener('keydown', handleKeydown)
        addEventListener('keyup', handleKeyup)
        return () => {
            removeEventListener('keydown', handleKeydown)
            removeEventListener('keyup', handleKeyup)
        }
    }, []);

    return {
        isSpace
    }
}