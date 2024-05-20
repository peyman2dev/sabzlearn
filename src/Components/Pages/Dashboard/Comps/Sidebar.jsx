import React from "react";
import { NavLink } from "react-router-dom";
import isLinkActive from "../../../../Utils/Functions/isLinkActive";
import { Bookmark2, Category2, Folder2, Home2, MenuBoard, Message, Profile2User } from "iconsax-react";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const { t, i18n } = useTranslation();

  return (
    <aside className="duration-150 child:flex child:rounded-lg child:duration-150  space-y-2 child:p-3 child:gap-3 child:items-center p-6 w-[240px] bg-white h-screen">
      <NavLink to={""} end className={isLinkActive()}>
        <span>
          <Home2 />
        </span>
        <span>{t("dashboard.routes.home")}</span>
      </NavLink>
      <NavLink to={"courses"} end className={isLinkActive()}>
        <span>
          <Folder2 />
        </span>
        <span>{t("dashboard.routes.courses")}</span>
      </NavLink>
      <NavLink to={"articles"} end className={isLinkActive()}>
        <span>
          <Bookmark2 />
        </span>
        <span>{t("dashboard.routes.articles")}</span>
      </NavLink>
      <NavLink to={"menus"} end className={isLinkActive()}>
        <span>
          <MenuBoard />
        </span>
        <span>{t("dashboard.routes.menus")}</span>
      </NavLink>
      <NavLink to={"users"} end className={isLinkActive()}>
        <span>
          <Profile2User />
        </span>
        <span>{t("dashboard.routes.users")}</span>
      </NavLink>
      <NavLink to={"categories"} end className={isLinkActive()}>
        <span>
          <Category2 />
        </span>
        <span>{t("dashboard.routes.categories")}</span>
      </NavLink>
      <NavLink to={"comments"} end className={isLinkActive()}>
        <span>
          <Message />
        </span>
        <span>{t("dashboard.routes.comments")}</span>
      </NavLink>
    </aside>
  );
}
