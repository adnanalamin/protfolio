import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <h2>error</h2>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        }
      ]
    },
  ]);

  export default router;