import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Main from "../layout/MainLayout/Main";
import AboutComponents from "../pages/About/AboutComponents/AboutComponents";
import AllAdmins from "../pages/AllAdmins/AllAdmins";
import AllRegisteredUser from "../pages/AllRegisteredUser/AllRegisteredUser";
import ContactComponents from "../pages/Contact/ContactComponents/ContactComponents";
import HomeComponents from "../pages/Home/HomeComponents/HomeComponents";
import Login from "../pages/Login/Login";
import MyProfile from "../pages/MyProfile/MyProfile";
import Register from "../pages/Register/Register";
import ShopComponents from "../pages/Shop/ShopComponents/ShopComponents";
import AdminRoute from "./AdminRoute";
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
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <MyProfile></MyProfile>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllRegisteredUser></AllRegisteredUser></AdminRoute>
            },
            {
                path: '/dashboard/allAdmin',
                element: <AdminRoute><AllAdmins></AllAdmins></AdminRoute>
            },

        ]
    }
])

export default routes;