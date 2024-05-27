import { ArrowDown2 } from "iconsax-react";
import _ from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loggedin from "../Buttons/Loggedin";
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
                  <ul className="absolute z-[11] border-t dark:border-t-white/10 space-y-3 p-4 opacity-0 invisible duration-300 group-hover:visible group-hover:opacity-100 w-[246px] rounded-lg bg-white dark:bg-[#2F3542] shadow-md ">
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
        <label class="input input-bordered dark:bg-dark-md bg-gray-50 flex items-center gap-2">
  <input type="text" class="grow" placeholder="جستجو کنید" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
</label>
        <ThemeButton />
        <Loggedin />
      </div>
    </nav>
  );
}
