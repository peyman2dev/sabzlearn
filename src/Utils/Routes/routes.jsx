import Articles from "../../Components/Pages/Dashboard/Pages/Articles/Articles";
import Categories from "../../Components/Pages/Dashboard/Pages/Categories/Categories";
import Comments from "../../Components/Pages/Dashboard/Pages/Comments/Comments";
import CourseCreate from "../../Components/Pages/Dashboard/Pages/Courses/CourseCreate";
import Courses from "../../Components/Pages/Dashboard/Pages/Courses/Courses";
import Menus from "../../Components/Pages/Dashboard/Pages/Menus/Menus";
import Offers from "../../Components/Pages/Dashboard/Pages/Offers/Offers";
import Tickets from "../../Components/Pages/Dashboard/Pages/Tickets/Tickets";
import Users from "../../Components/Pages/Dashboard/Pages/Users/Users";
import Auth from "../../Pages/Auth";
import Category from "../../Pages/Category";
import Course from "../../Pages/Course";
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
          {
            path: "users/*",
            element: <Users />
          },
          {
            path: "articles/*",
            element: <Articles />
          },
          {
            path: "tickets/*",
            element: <Tickets />
          },
          {
            path: "offers/*",
            element: <Offers />
          },
          {
            path: "categories/*",
            element: <Categories />
          },
          {
            path: "menus/*",
            element: <Menus />
          },
          {
            path: "comments/*",
            element: <Comments />
          },
        ],
      },
      
    ],
  },
  {
    path: "/category/:category",
    element: <Category />,
  },
  {
    path: "/course/:courseName",
    element: <Course />
  }
];

export default routes;
