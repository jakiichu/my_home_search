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
           className='h-24 text-center text-white fill-primary bg-default_accent rounded *:mx-auto'>
            <Icon path={path} size={3} color=''/>
            <p>
                {title}
            </p>
        </a>
    );
};

export default ProjectItem;