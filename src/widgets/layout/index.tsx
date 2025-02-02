import {ReactNode} from "react";
import {useIsVisible} from "@/widgets/layout/cases/visible";
import {useSearch} from "@/entities/search/presenter";
import {Outlet} from "react-router-dom";

const SearchLayout = (): ReactNode => {
    const {form, handleSubmit} = useSearch()
    const {isVisible} = useIsVisible(form)
    return (
        <>
            {
                isVisible ?
                    <>

                        <div
                            className='absolute backdrop-blur bg-white/10 w-full h-full z-10'/>
                        <form onSubmit={handleSubmit}
                              className='fixed w-full top-20 flex flex-col items-center justify-center z-10 '>
                            <input type="text"
                                   className='bg-default_accent p-2 text-white min-w-96 rounded transition duration-1000 ease-in-out z-10'
                                   placeholder='Поиск' {...form.register('search')}/>
                        </form>
                    </>
                    : <>

                    </>
            }
            <Outlet/>
        </>
    );
};

export default SearchLayout;