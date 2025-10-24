import { createBrowserRouter } from "react-router";
import Rootlayout from "../layout/Rootlayout/Rootlayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register";
import ProductList from "../pages/ProductList/ProductList";

const router = createBrowserRouter([
    {
        path:"/",
        Component:Rootlayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"login",
                Component:Login
            },
            {
                path:"register",
                Component:Register
            },
            {
                path:"ProductList",
                element:<ProductList></ProductList>
            }
        ]
    }
]);

export default router;
