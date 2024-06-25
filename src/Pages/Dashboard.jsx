import React from "react";
import Sidebar from "../Components/Pages/Dashboard/Components/Sidebar";
import { HiOutlineFolderOpen, HiOutlineUsers } from "react-icons/hi2";
import CourseCreate from "../Components/Pages/Dashboard/Pages/Courses/CourseCreate";
import Courses from "../Components/Pages/Dashboard/Pages/Courses/Courses";
import {
  Category2,
  DirectboxDefault,
  Home2,
  MenuBoard,
  Message,
  MessageProgramming,
} from "iconsax-react";
import Users from "../Components/Pages/Dashboard/Pages/Users/Users";
import Home from "../Components/Pages/Dashboard/Pages/Home/Home";
import Categories from "../Components/Pages/Dashboard/Pages/Categories/Categories";
import { GrArticle } from "react-icons/gr";
import { PercentOutlined } from "@mui/icons-material";
import { Outlet} from "react-router-dom";
import _ from "lodash";
import Tickets from "../Components/Pages/Dashboard/Pages/Tickets/Tickets";
import Articles from "../Components/Pages/Dashboard/Pages/Articles/Articles";
import Offers from "../Components/Pages/Dashboard/Pages/Offers/Offers";
import Menus from "../Components/Pages/Dashboard/Pages/Menus/Menus";
import Comments from "../Components/Pages/Dashboard/Pages/Comments/Comments";
const Dashboard = () => {
  const routes = [
    {
      id: crypto.randomUUID(),
      icon: <Home2 size={21} />,
      title: "داشبورد",
      to: "/dashboard",
      element: <Home />,
    },
    {
      id: crypto.randomUUID(),
      icon: <HiOutlineFolderOpen className="text-xl" />,
      title: "دوره ها",
      to: "courses",
      element: <Courses />,
      children: [
        {
          id: crypto.randomUUID(),
          to: "courses/create",
          element: <CourseCreate />
        },
      ],
    },

    {
      id: crypto.randomUUID(),
      icon: <HiOutlineUsers className="text-xl" />,
      title: "کاربران",
      to: "users",
      element: <Users />,
    },
    {
      id: crypto.randomUUID(),
      icon: <DirectboxDefault size={18} />,
      title: "تیکت ها",
      to: "tickets",
      element: <Tickets />,
    },
    {
      id: crypto.randomUUID(),
      icon: <GrArticle size={18} />,
      title: "مقاله ها",
      to: "articles",
      element: <Articles />,
    },
    {
      id: crypto.randomUUID(),
      icon: <PercentOutlined size={18} />,
      title: "تخفیفات",
      to: "offers",
      element: <Offers />,
    },
    {
      id: crypto.randomUUID(),
      icon: <Category2 size={18} />,
      title: "دسته بندی ها",
      to: "categories",
      element: <Categories />,
    },
    {
      id: crypto.randomUUID(),
      icon: <MenuBoard size={18} />,
      title: "منو ها",
      to: "menus",
      element: <Menus />,
    },
    {
      id: crypto.randomUUID(),
      icon: <MessageProgramming size={18} />,
      title: "کامنت ها",
      to: "comments",
      element: <Comments />,
    },
  ];
  return (
    <section className="flex min-h-screen bg-gray-100 dark:bg-dark-900">
      <Sidebar routes={routes} />
      <main className="w-[80%] mx-auto pt-10">
        <Outlet />
      </main>
    </section>
  );
};

export default Dashboard;
