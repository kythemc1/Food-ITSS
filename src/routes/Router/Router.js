import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Pages/Blog/Blog/Blog";
import Home from "../../components/Pages/Home/Home/Home";
import Login from "../../components/Pages/Login/Login";
import Services from "../../components/Pages/Services/Services/Services";
import ServiceSingle from "../../components/Pages/Services/ServiceSingle/ServiceSingle";
import SignUp from "../../components/Pages/SignUp/SignUp";
import AddService from "../../components/Pages/User/AddService/AddService";
import ReviewCollection from "../../components/Pages/User/ReviewCollection/ReviewCollection";
import EditProfile from "../../components/Pages/User/SidebarProfile/EditProfile/EditProfile";
import NotFoundPage from "../../components/Shared/NotFoundPage/NotFoundPage";
import Main from "../../layout/Main";
import User from "../../layout/User";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Anket from "../../components/Pages/Anket/Anket/Anket";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                loader: async ()=> fetch('https://food-monster-server.vercel.app/homeservices'),
                element: <Home></Home>
            },
            {
                path: '/services',
                loader: async ()=> fetch('https://food-monster-server.vercel.app/services'),
                element: <Services></Services>
            },
            {
                path: '/services/:_id',
                loader: async({params})=>fetch(`https://food-monster-server.vercel.app/services/${params._id}`),
                element: <ServiceSingle></ServiceSingle>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/anket',
                element: <Anket></Anket>
            }
        ]
    },
    {
        path: '/',
        element: <User></User>,
        children: [
            {
                path: '/edit-profile',
                element: <PrivateRoute><EditProfile></EditProfile></PrivateRoute>
            },
            {
                path: '/add-service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/my-reviews',
                loader: async()=>fetch('https://food-monster-server.vercel.app/reviews'),
                element: <PrivateRoute><ReviewCollection></ReviewCollection></PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    }
])


export default Router;
