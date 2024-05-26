import { ArrowDown2 } from "iconsax-react";
import _ from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loggedin from "../Loggedin/Loggedin";
import ThemeButton from "../Buttons/ThemeButton";

export default function Windows() {
  const { menus } = useSelector((state) => state.server);

  return (
    <nav className="px-10 lg:flex lg:visible hidden invisible items-center justify-between">
      <ul className="flex items-center gap-5">
        <Link to={'/'}>
        <img  src="/images/logo.png" alt="Logo" className="w-14" />
        </Link>
        {menus && menus.length
          ? _.map(menus, (menu, index) =>
              menu.submenus.length ? (
                <li key={index} className="group relative">
                  <Link to={menu.href} className="flex items-center gap-1.5">
                    <span>{menu.title}</span>
                    <span>
                      <ArrowDown2 className="transition-all duration-300 rotate-90 w-3 group-hover:rotate-0" />
                    </span>
                  </Link>
                  <ul className="absolute border-t dark:border-t-white/10 space-y-3 p-4 opacity-0 invisible duration-300 group-hover:visible group-hover:opacity-100 w-[246px] rounded-lg bg-white dark:bg-[#2F3542] shadow-md ">
                    {_.map(menu.submenus, (sub, index) => (
                      <li key={index}>
                        <Link
                          to={sub.href}
                          className="w-full h-full flex items-center hover:text-emerald-500 duration-150"
                        >
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={index}>
                  <Link>{menu.title}</Link>
                </li>
              )
            )
          : ""}
      </ul>
      <div className="flex items-center gap-3">
        <ThemeButton />
        <Loggedin />
      </div>
    </nav>
  );
}
