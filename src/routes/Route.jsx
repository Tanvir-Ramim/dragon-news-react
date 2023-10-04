import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";


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
           }
          
        ]
    }
  ])

  export default route;