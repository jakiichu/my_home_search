import {mdiAccount, mdiGitlab, mdiKeyboard} from "@mdi/js";
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
        },
        {
            keyCombination: '2',
            title: 'gitlab.ipst',
            url: 'https://gitlab.ipst-dev.com/',
            path: mdiGitlab
        }, {
            keyCombination: '3',
            title: 'ipst.stage',
            url: 'https://ipst-platform.stage.ipst-dev.com/report',
            path: mdiAccount
        },
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