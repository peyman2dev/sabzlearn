import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Pages/Dashboard/Pages/Home";
import Courses from "../Components/Pages/Dashboard/Pages/Courses/Courses";
import Articles from "../Components/Pages/Dashboard/Pages/Articles";
import Menus from "../Components/Pages/Dashboard/Pages/Menus";
import Users from "../Components/Pages/Dashboard/Pages/Users";
import Categories from "../Components/Pages/Dashboard/Pages/Categories";
import Comments from "../Components/Pages/Dashboard/Pages/Comments";
import { Helmet } from "react-helmet";
import _ from "lodash";
import Sidebar from "../Components/Pages/Dashboard/Components/Sidebar";
import Create from "../Components/Pages/Dashboard/Pages/Courses/Create";
import Header from "../Components/Pages/Dashboard/Components/Header";
import Search from "../Components/Pages/Dashboard/Pages/Search";

export default function Dashboard() {
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
      path: "search",
      element: <Search />,
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
    <>
      <main className="flex  dark:text-white bg-[#F4F7FE] text-[#2B3674] dark:bg-[#0B1437]">
        <Sidebar />
        <section className="w-full">
          <Header />
          <section className="px-6">
            <Routes
              children={_.map(routes, (route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            />
          </section>
        </section>
      </main>
    </>
  );
}
