import {createBrowserRouter} from "react-router-dom";
import {LoadComponent} from "@/shared/components/lazy";
import {lazy} from "react";
import {ERouterPath} from "@/shared/enum/route";
const MainPage = LoadComponent(lazy(async () => import("@/pages/main_page")))
export const router = createBrowserRouter([
    {
        path: ERouterPath.MAIN,
        element: <MainPage/>,
    }
])
