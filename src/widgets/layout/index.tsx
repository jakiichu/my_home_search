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
                    <div className='absolute backdrop-blur bg-white/5 w-full h-full z-10'>
                        <form onSubmit={handleSubmit}
                              className='fixed w-full top-20 flex flex-col items-center justify-center z-10 '>
                            <input type="text" className='bg-default_accent p-2 text-white min-w-96 rounded'
                                   placeholder='Поиск' {...form.register('search')}/>
                        </form>
                    </div>
                    : <>

                    </>
            }
            <Outlet/>
        </>
    );
};

export default SearchLayout;