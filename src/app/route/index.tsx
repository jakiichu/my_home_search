import {createBrowserRouter} from "react-router-dom";
import {LoadComponent} from "@/shared/components/lazy";
import {lazy} from "react";
import {ERouterPath} from "@/shared/enum/route";

const SearchLayout = LoadComponent(lazy(async () => import("@/widgets/layout")))
const MainPage = LoadComponent(lazy(async () => import("@/pages/main_page")))
export const router = createBrowserRouter([
    {
        element: <SearchLayout/>,
        children: [
            {
                path: ERouterPath.MAIN,
                element: <MainPage/>,
            }
        ]
    },

])
