import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Component/ProjectDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/project/:id',
                element:<ProjectDetails/>
            }
        ]
    }
])

export default router;