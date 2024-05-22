import { t } from "i18next";
import _ from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import isLinkActive from "../../../../Utils/Functions/isLinkActive";

export default function Sidebar() {
  const user = useSelector((state) => state.server.user.userInfos);
  const routes = [
    {
      id: crypto.randomUUID(),
      path: "",
      title: t("dashboard.routes.home"),
    },
    {
      id: crypto.randomUUID(),
      path: "courses",
      title: t("dashboard.routes.courses"),
    },
    {
      id: crypto.randomUUID(),
      path: "articles",
      title: t("dashboard.routes.articles"),
    },
    {
      id: crypto.randomUUID(),
      path: "menus",
      title: t("dashboard.routes.menus"),
    },
    {
      id: crypto.randomUUID(),
      path: "users",
      title: t("dashboard.routes.users"),
    },
    {
      id: crypto.randomUUID(),
      path: "categories",
      title: t("dashboard.routes.categories"),
    },
    {
      id: crypto.randomUUID(),
      path: "comments",
      title: t("dashboard.routes.comments"),
    },
  ];
  return (
    <aside className="min-w-[240px] py-10  text-white">
      <header>
        <span
          className="w-20 block h-20 rounded-full object-cover bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://www.cela.design/wp-content/uploads/2023/03/Tolle-Portrait-Fotografie-Koeln-Outdoor-12.png')",
          }}
        ></span>
        <div className="mt-4">
          <p className="text-lg font-Dana-Demi">{user.name}</p>
          <p className="mt-1 text-xs text-gray-400">{user.email}</p>
        </div>
      </header>
      <main className="child:flex child:p-3 child:items-center child:gap-3 child:w-full mt-10">
        {_.map(routes, (route) => (
          <NavLink end={route.path === "" && true} className={isLinkActive()} to={route.path} children={
            <>
            <span>

            </span>
            <span>
            {route.title}
            </span>
            </>
          }/>
        ))}
      </main>
      <footer></footer>
    </aside>
  );
}
