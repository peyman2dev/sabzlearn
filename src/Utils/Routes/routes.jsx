import Auth from "../../Pages/Auth";
import Category from "../../Pages/Category";
import Dashboard from "../../Pages/Dashboard";
import Home from "../../Pages/Home";
import AdminRoute from "../Private/AdminRoute";

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
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ),
  },
  {
    path: "/category/:category",
    element: <Category />,
  },
];

export default routes;
