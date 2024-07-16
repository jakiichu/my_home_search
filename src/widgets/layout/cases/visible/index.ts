import {MutableRefObject, useEffect, useRef, useState} from "react";
import {UseFormReturn} from "react-hook-form";

interface IIsVisible {
    isVisible: boolean;
    ref: MutableRefObject<HTMLInputElement | null>
}

export const useIsVisible = (form: UseFormReturn<{ search: string }>): IIsVisible => {
    const [isVisible, setIsVisible] = useState(false)
    const handleKeyup = (e: KeyboardEvent) => {
        switch (e.key) {
            case "Escape":
                setIsVisible(false)
                break;
            case "`":
            case "ё":
                setIsVisible(true)
                setTimeout(() => {
                    form.setFocus('search')
                }, 100)
                break
        }
    }
    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
        addEventListener('keyup', handleKeyup)
        return () => {
            removeEventListener('keyup', handleKeyup)
        }
    }, []);

    return {
        isVisible,
        ref
    }
}