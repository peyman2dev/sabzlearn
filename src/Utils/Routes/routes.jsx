import Auth from "../../Pages/Auth";
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
];

export default routes;
