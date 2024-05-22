import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Pages/Dashboard/Pages/Home";
import Courses from '../Components/Pages/Dashboard/Pages/Courses/Courses'
import Articles from "../Components/Pages/Dashboard/Pages/Articles";
import Menus from "../Components/Pages/Dashboard/Pages/Menus";
import Users from "../Components/Pages/Dashboard/Pages/Users";
import Categories from "../Components/Pages/Dashboard/Pages/Categories";
import Comments from "../Components/Pages/Dashboard/Pages/Comments";
import { Helmet } from "react-helmet";
import _ from "lodash";
import Sidebar from "../Components/Pages/Dashboard/Components/Sidebar";
import Create from "../Components/Pages/Dashboard/Pages/Courses/Create";

export default function Dashboard() {
  const lang = localStorage.getItem("language") || "persian";
  const [show, setShow] = useState(false);
  const routes = [
    {
      id: crypto.randomUUID(),
      path: "",
      element: <Home />,
    },
    {
      id: crypto.randomUUID(),
      path: "courses",
      element: <Courses />,
    },
    {
      id: crypto.randomUUID(),
      path: "courses/create",
      element: <Create />,
    },
    {
      id: crypto.randomUUID(),
      path: "articles",
      element: <Articles />,
    },
    {
      id: crypto.randomUUID(),
      path: "menus",
      element: <Menus />,
    },
    {
      id: crypto.randomUUID(),
      path: "users",
      element: <Users />,
    },
    {
      id: crypto.randomUUID(),
      path: "categories",
      element: <Categories />,
    },
    {
      id: crypto.randomUUID(),
      path: "comments",
      element: <Comments />,
    },
  ];

  return (
    <section className="p-20 py-5 bg-[#101010] text-[#101010!important]">
      <Helmet title=" داشبورد | خانه" />
      <main className="flex gap-4">
        <Sidebar />
        <section className="p-10 bg-white w-full rounded-[42px] min-h-[95vh]">
          <Routes
            children={_.map(routes, (route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          />
        </section>
      </main>
    </section>
  );
}
