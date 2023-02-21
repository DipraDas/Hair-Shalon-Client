import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/MainLayout/Main";
import AboutComponents from "../pages/About/AboutComponents/AboutComponents";
import ContactComponents from "../pages/Contact/ContactComponents/ContactComponents";
import HomeComponents from "../pages/Home/HomeComponents/HomeComponents";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ShopComponents from "../pages/Shop/ShopComponents/ShopComponents";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <HomeComponents></HomeComponents>,
            },
            {
                path: "/about",
                element: <AboutComponents></AboutComponents>,
            },
            {
                path: "/shop",
                element: <PrivateRoutes><ShopComponents></ShopComponents></PrivateRoutes>
            },
            {
                path: "/contact",
                element: <ContactComponents></ContactComponents>,
            },
            {
                path: "/login",
                element: <Login></Login> ,
            },
            {
                path: "/register",
                element: <Register></Register> ,
            }
        ]
    },
])

export default routes;