import { t } from "i18next";
import _ from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import isLinkActive from "../../../../Utils/Functions/isLinkActive";
import { ArchiveBook, Category, Folder2, Home2, MenuBoard, MessageText, Profile2User } from "iconsax-react";

export default function Sidebar() {
  const user = useSelector((state) => state.server.user.userInfos);
  const routes = [
    {
      id: crypto.randomUUID(),
      path: "",
      title: t("dashboard.routes.home"),
      icon: <Home2 />
    },
    {
      id: crypto.randomUUID(),
      path: "courses",
      title: t("dashboard.routes.courses"),
      icon: <Folder2 /> ,
    },
    {
      id: crypto.randomUUID(),
      path: "articles",
      title: t("dashboard.routes.articles"),
      icon: <ArchiveBook /> ,
    },
    {
      id: crypto.randomUUID(),
      path: "menus",
      title: t("dashboard.routes.menus"),
      icon: <MenuBoard />,
    },
    {
      id: crypto.randomUUID(),
      path: "users",
      title: t("dashboard.routes.users"),
      icon: <Profile2User />,
    },
    {
      id: crypto.randomUUID(),
      path: "categories",
      title: t("dashboard.routes.categories"),
      icon: <Category /> ,
    },
    {
      id: crypto.randomUUID(),
      path: "comments",
      title: t("dashboard.routes.comments"),
      icon: <MessageText /> ,
    },
  ];
  return (
    <aside className="min-w-[290px] dark:bg-[#111C44]  relative min-h-screen bg-white ">
      <header className="py-12 border-b flex dark:text-white items-center justify-center">
    <p>
      خوش آمدید
    </p>
      </header>
      <main className="child:flex space-y-1 pt-9 pr-[34px]  child:p-3 child:items-center child:gap-3 child:w-full ">
        {_.map(routes, (route) => (
          <NavLink key={route.id} end={route.path === "" && true} className={isLinkActive()} to={route.path} children={
            <>
            <span>
            {route.icon}
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
