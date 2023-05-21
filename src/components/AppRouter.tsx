import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../pages/home";
import StoryPage from "../pages/story";
import ErrorPage from "../pages/ErrorPage";
import Navbar from "./Navbar";

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
            errorElement: <ErrorPage/>,
        },
        {
            path: "story/:id",
            element: <StoryPage/>,
        },
    ]);

    return (
        <>
            <Navbar/>
            <RouterProvider router={router}/>
        </>
    );
};

export default AppRouter;
