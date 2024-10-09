import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../layout/Root/Root";
import Booking from "../pages/Booking/Booking";
import Home from "../pages/Home/Home";

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
            }
        ]
    },
]);

export default router;
