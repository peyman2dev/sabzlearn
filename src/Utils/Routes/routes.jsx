import CourseCreate from "../../Components/Pages/Dashboard/Pages/Courses/CourseCreate";
import Courses from "../../Components/Pages/Dashboard/Pages/Courses/Courses";
import Auth from "../../Pages/Auth";
import Category from "../../Pages/Category";
import Dashboard from "../../Pages/Dashboard";
import Home from "../../Pages/Home";
import AdminRoute from "../Private/AdminRoute";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth/:method",
    element: <Auth />,
  },
  {
    path: "/dashboard",
    element: <AdminRoute />, // This uses AdminRoute to wrap the dashboard routes
    children: [
      {
        path: "", // This will match /dashboard
        element: <Dashboard />, // This will be rendered inside AdminRoute
        children: [
          {
            path: "courses/*", // This will match /dashboard/courses
            element: <Courses />,
            children: [
              {
                path: "create", // This will match /dashboard/courses/create
                element: <CourseCreate />
              },
            ]
          },
        ],
      },
    ],
  },
  {
    path: "/category/:category",
    element: <Category />,
  },
];

export default routes;
