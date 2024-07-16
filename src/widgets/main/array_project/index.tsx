import {mdiKeyboard} from "@mdi/js";
import {ReactNode} from "react";
import {IProjectsArray} from "@/shared/interface/project";
import ProjectItem from "@/features/main/project";


const ArrayProject = (): ReactNode => {
    const projects: IProjectsArray = [
        {
            keyCombination: '1',
            title: 'monkeytype',
            url: 'https://monkeytype.com/',
            path: mdiKeyboard
        }
    ]
    return (
        <div className={`grid grid-cols-4 gap-6 w-full max-w-[1200px] mx-auto`}>
            {
                projects.map((project) => <ProjectItem  {...project}/>)
            }
        </div>
    );
};

export default ArrayProject;