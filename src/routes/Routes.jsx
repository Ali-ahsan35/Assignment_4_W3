import MainLayout from "../layouts/MainLayout";
import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../components/NotFound";
import Tasks from "../pages/Tasks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <NotFound/> ,
    children: [
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/alltasks",
            element:<Tasks/>
        }
    ]
  },
]);