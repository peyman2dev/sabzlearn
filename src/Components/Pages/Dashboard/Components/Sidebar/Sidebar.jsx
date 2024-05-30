import { Home2, SearchNormal, Setting2 } from "iconsax-react";
import {HiOutlineUsers} from 'react-icons/hi2'
import { TbCategoryFilled } from "react-icons/tb";
import { GrArticle } from 'react-icons/gr'
import React from "react";
import { Link, NavLink } from "react-router-dom";
import isLinkActive from "../../../../../Utils/Functions/isLinkActive";
import _ from "lodash";
import { BsInboxes } from "react-icons/bs";
import { Logout } from "@mui/icons-material";
export default function Sidebar() {
  const routes = [
    {
      id: crypto.randomUUID(),
      title: "خانه",
      icon: <Home2 className="w-5"/>,
      path: "",
      isLinkActive,
    },
    {
      id: crypto.randomUUID(),
      title: "دوره ها",
      icon: <TbCategoryFilled />,
      path: "courses",
      isLinkActive,
    },
    {
      id: crypto.randomUUID(),
      title: "کاربران",
      icon: <HiOutlineUsers />,
      path: "users",
      isLinkActive,
    },
    {
      id: crypto.randomUUID(),
      title: "جستجو",
      icon: <SearchNormal className="w-4" />,
      path: "search",
      isLinkActive,
    },
    {
      id: crypto.randomUUID(),
      title: "مقالات",
      icon: <GrArticle className="w-4" />,
      path: "articles",
      isLinkActive,
    },
    {
      id: crypto.randomUUID(),
      title: "تیکت ها",
      icon: <BsInboxes className="w-4" />,
      path: "tickets",
      isLinkActive,
    },
  ];
  return (
    <aside className="min-h-screen lg:visible  hidden invisible lg:flex flex-col justify-between p-4 min-w-[240px] bg-white">
      <div>
      <header className="mt-3">
        <Link className="text-xl flex items-center justify-center gap-2 font-Dana-Black">
          <span>
            <img src="/images/logo.png" alt="لوگو" className="w-10" />
          </span>
          <span className="tracking-tight">پنل مدیریت</span>
        </Link>
      </header>
      <main className="mt-6 space-y-1 font-Dana-Medium">
        {
          _.map(routes, route => (
            <NavLink end={route.path == '' ? true : false} to={route.path} clas className={route.isLinkActive()}>
              <span>
                {route.icon}
              </span>
              <span>
                {route.title}
              </span>
            </NavLink>
          ))
        }
      </main>
      </div>
      <div className="child:flex child:w-full child:rounded-md child:duration-150 space-y-2 child:items-center child:gap-2 child:py-2 child:px-3">
        <button>
        <span>
          <Setting2 />
        </span>
        <span>
          تنظیمات
        </span>
        </button>
        <Link to={'/'} className="hover:bg-red-500 hover:text-white">
        <span>
          <Logout />
        </span>
        <span>
          خروج
        </span>
        </Link>
      </div>
    </aside>
  );
}
