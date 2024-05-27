import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Pages/Dashboard/Pages/Home";
import Courses from "../Components/Pages/Dashboard/Pages/Courses/Courses";
import Articles from "../Components/Pages/Dashboard/Pages/Articles";
import Menus from "../Components/Pages/Dashboard/Pages/Menus";
import Users from "../Components/Pages/Dashboard/Pages/Users";
import Categories from "../Components/Pages/Dashboard/Pages/Categories";
import Create from "../Components/Pages/Dashboard/Pages/Courses/Create";
import Comments from "../Components/Pages/Dashboard/Pages/Comments";
import { Helmet } from "react-helmet";
import _ from "lodash";
import Search from "../Components/Pages/Dashboard/Pages/Search";
import Sidebar from "../Components/Pages/Dashboard/Components/Sidebar/Sidebar";
import DashboardContext from "../Utils/Contexts/DashboardContext";
import Header from "../Components/Pages/Dashboard/Components/Header/Header";

export default function Dashboard() {
  const { Provider } = DashboardContext;
  const [routeTitle, setRouteTitle] = useState("")
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
    <Provider value={{
      routing: {
        routeTitle,
        setRouteTitle
      }
    }}>
      <main className="flex  bg-[#f6f7fb] min-h-screen text-[#3a3a3a]">
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
    </Provider>
  );
}
