import Auth from "../../Pages/Auth";
import Category from "../../Pages/Category";
import Dashboard from "../../Pages/Dashboard";
import Home from "../../Pages/Home";
import DashRoute from "../PrivateRoutes/DashRoute";

const routes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/auth/:method",
    element: <Auth />,
  },
  {
    path: "/dashboard/*",
    element: <DashRoute children={<Dashboard />}/>
  },
  {
    path: "/category/:category",
    element: <Category />,
  },
];

export default routes;
