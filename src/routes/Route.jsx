import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";


  const route=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
           {
            path:'/',
            element:<Home></Home>
           },
           {
            path:'/login',
            element: <Login></Login>
           },
           {
            path:'/registration',
            element:<Registration></Registration>
           },
           {
            path:'/details/:id',
            element:<NewsDetails></NewsDetails>
           }
          
        ]
    }
  ])

  export default route;