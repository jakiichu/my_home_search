import {ReactNode, useEffect} from 'react';
import Icon from "@mdi/react";
import {IProjects} from "@/shared/interface/project";

const ProjectItem = ({url, title, path, keyCombination}: IProjects): ReactNode => {
    const handleKeyup = (e: KeyboardEvent) => {
        switch (String(e.key)) {
            case keyCombination:
                if (e.altKey)
                    location.href = url
                break;

        }
    }
    useEffect(() => {
        addEventListener('keyup', handleKeyup)
        return () => {
            removeEventListener('keyup', handleKeyup)
        }
    }, []);
    return (
        <a href={url}
           className='h-24 text-center text-white fill-primary bg-default_accent rounded *:mx-auto relative'>
            <Icon path={path} size={3} color=''/>
            <p>
                {title}
            </p>
            <p className='text-primary absolute top-1 left-1'>{keyCombination}</p>
        </a>
    );
};

export default ProjectItem;