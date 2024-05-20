import React from "react";
import { NavLink } from "react-router-dom";
import isLinkActive from "../../../../Utils/Functions/isLinkActive";
import {
  Bookmark2,
  Category2,
  Folder2,
  Home2,
  MenuBoard,
  Message,
  Profile2User,
} from "iconsax-react";
import { useTranslation } from "react-i18next";

export default function Sidebar({ show }) {
  const { t, i18n } = useTranslation();

  return (
    <aside
      className={`duration-150 lg:visible lg:block hidden invisible child:flex overflow-hidden whitespace-nowrap child:rounded-lg child:duration-150  space-y-2 child:items-center  bg-white dark:bg-[#2b3344] pt-10 h-screen child:gap-3 
    ${
      show ? "min-w-[240px] p-6 child:p-3 " : "child:py-3 w-[80px] min-w-[80px]"
    }
    `}
    >
      <NavLink to={""} end className={isLinkActive()}>
        <span
          className={`${
            show ? "" : "min-w-[80px] flex items-center justify-center"
          }`}
        >
          <Home2 />
        </span>
        <span>{t("dashboard.routes.home")}</span>
      </NavLink>
      <NavLink to={"courses"} end className={isLinkActive()}>
        <span
          className={`${
            show ? "" : "min-w-[80px] flex items-center justify-center"
          }`}
        >
          <Folder2 />
        </span>
        <span>{t("dashboard.routes.courses")}</span>
      </NavLink>
      <NavLink to={"articles"} end className={isLinkActive()}>
        <span
          className={`${
            show ? "" : "min-w-[80px] flex items-center justify-center"
          }`}
        >
          <Bookmark2 />
        </span>
        <span>{t("dashboard.routes.articles")}</span>
      </NavLink>
      <NavLink to={"menus"} end className={isLinkActive()}>
        <span
          className={`${
            show ? "" : "min-w-[80px] flex items-center justify-center"
          }`}
        >
          <MenuBoard />
        </span>
        <span>{t("dashboard.routes.menus")}</span>
      </NavLink>
      <NavLink to={"users"} end className={isLinkActive()}>
        <span
          className={`${
            show ? "" : "min-w-[80px] flex items-center justify-center"
          }`}
        >
          <Profile2User />
        </span>
        <span>{t("dashboard.routes.users")}</span>
      </NavLink>
      <NavLink to={"categories"} end className={isLinkActive()}>
        <span
          className={`${
            show ? "" : "min-w-[80px] flex items-center justify-center"
          }`}
        >
          <Category2 />
        </span>
        <span>{t("dashboard.routes.categories")}</span>
      </NavLink>
      <NavLink to={"comments"} end className={isLinkActive()}>
        <span
          className={`${
            show ? "" : "min-w-[80px] flex items-center justify-center"
          }`}
        >
          <Message />
        </span>
        <span>{t("dashboard.routes.comments")}</span>
      </NavLink>
    </aside>
  );
}
