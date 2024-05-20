import React from "react";
import Sidebar from "../Components/Pages/Dashboard/Comps/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Pages/Dashboard/Pages/Home";
import Courses from "../Components/Pages/Dashboard/Pages/Courses";
import Articles from "../Components/Pages/Dashboard/Pages/Articles";
import Menus from "../Components/Pages/Dashboard/Pages/Menus";
import Users from "../Components/Pages/Dashboard/Pages/Users";
import Categories from "../Components/Pages/Dashboard/Pages/Categories";
import Comments from "../Components/Pages/Dashboard/Pages/Comments";

export default function Dashboard() {
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
    <>
      <Sidebar />
      <Routes
        children={routes.map((route, index) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      />
    </>
  );
}
