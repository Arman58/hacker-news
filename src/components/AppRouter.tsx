import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import PageNotFound from "../pages/pageNotFount";
import StoryPage from "../pages/story";
import ErrorPage from "../pages/pageNotFount";
import Navbar from "./Navbar";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      element: <PageNotFound />,
    },
    {
      path: "story/:id",
      element: <StoryPage />,
    },
  ]);

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
