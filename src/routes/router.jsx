import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../layout/Root/Root";
import Booking from "../pages/Booking/Booking";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element:<Home/>
            },
            {
                path: "/booking",
                element:<Booking/>
            },
            {
                path: "/login",
                element:<Login/>
            },
            {
                path: "/register",
                element:<Register/>
            }
        ]
    },
]);

export default router;
