import React, { useState } from "react";
import Sidebar from "../Components/Pages/Dashboard/Comps/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Pages/Dashboard/Pages/Home";
import Courses from "../Components/Pages/Dashboard/Pages/Courses";
import Articles from "../Components/Pages/Dashboard/Pages/Articles";
import Menus from "../Components/Pages/Dashboard/Pages/Menus";
import Users from "../Components/Pages/Dashboard/Pages/Users";
import Categories from "../Components/Pages/Dashboard/Pages/Categories";
import Comments from "../Components/Pages/Dashboard/Pages/Comments";
import { Helmet } from "react-helmet";
import i18n from "../Utils/i18n";
import Header from "../Components/Pages/Dashboard/Comps/Header";
import Tippy from "@tippyjs/react";

export default function Dashboard() {
  const lang = localStorage.getItem("language") || "persian";
  const [show, setShow] = useState(false);
  const routes = [
    {
      id: crypto.randomUUID(),
      path: "/",
      element: <Home />,
    },
    {
      id: crypto.randomUUID(),
      path: "courses",
      element: <Courses />,
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
    <section
      className={`flex dark:bg-[#1B2431] ${
        lang === "english" ? "font-En-Regular" : ""
      }`}
      style={{ direction: i18n.language === "persian" ? "rtl" : "ltr" }}
    >
      <Helmet title=" داشبورد | خانه" />

      <Sidebar show={show} setShow={setShow} />

      <main className="w-full ">
        <Header setShow={setShow} show={show} />
        <section className="w-[95%] mx-auto">
          <Routes
            children={routes.map((route, index) => (
              <Route key={route.id} path={route.path} element={route.element} />
            ))}
          />
        </section>
      </main>
    </section>
  );
}
