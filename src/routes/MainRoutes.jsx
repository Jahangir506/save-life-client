import { createBrowserRouter } from "react-router-dom";
import Login from "../components/shared/Login/Login";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts/>,
        children: [
            {
                path: '/',
                element: <Home/> 
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    }
])
