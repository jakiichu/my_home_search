import {ReactElement} from "react";
import {mdiLoading} from '@mdi/js';
import Icon from '@mdi/react';

const Loader = (): ReactElement => (
    <div className='fixed w-full h-full z-[1000]'>
        <div className='h-screen flex items-center justify-center '>
            <div className="animate-spin fill-primary">
                <Icon path={mdiLoading} size={3} color=""/>
            </div>
        </div>
    </div>
);


export default Loader;