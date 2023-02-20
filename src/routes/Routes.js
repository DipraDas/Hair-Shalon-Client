import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/MainLayout/Main";
import AboutComponents from "../pages/About/AboutComponents/AboutComponents";
import ContactComponents from "../pages/Contact/ContactComponents/ContactComponents";
import HomeComponents from "../pages/Home/HomeComponents/HomeComponents";
import ShopComponents from "../pages/Shop/ShopComponents/ShopComponents";

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
                element: <ShopComponents></ShopComponents>,
            },
            {
                path: "/contact",
                element: <ContactComponents></ContactComponents>,
            },
        ]
    },
])

export default routes;