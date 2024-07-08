import {ReactNode} from "react";
import {router} from "@/app/route";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import {RouterProvider} from "react-router-dom";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
const client = new QueryClient({
    defaultOptions: {
        mutations: {
            retry: false,
            networkMode: "always",
        },
        queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
            networkMode: "always",
        },
    },
});

const App = (): ReactNode => (
        <QueryClientProvider client={client}>
            <ReactQueryDevtools initialIsOpen={false} />
            <RouterProvider router={router}/>
        </QueryClientProvider>
    )

export default App;