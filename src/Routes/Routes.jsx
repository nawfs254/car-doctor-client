import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Registration/Login";
import Cart from "../Pages/Cart/Cart";
import UserLayout from "../Layout/UserLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/public/services.json')
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
        ]
    },
    {
        path: "/user",
        element: <UserLayout></UserLayout>,
        children: [
            {
                path: "/user/login",
                element: <Login></Login>
            },
            {
                path: '/user/cart',
                element: <Cart></Cart>
            }
        ]
    },
]);

export default router;