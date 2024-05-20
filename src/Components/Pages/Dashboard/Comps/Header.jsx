import { ArrowDown2, HambergerMenu, Moon, Sun1 } from "iconsax-react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeButton from "../../../Reusable/Buttons/ThemeButton";
import { NavLink } from "react-router-dom";
import {
  Bookmark2,
  Category2,
  Folder2,
  Home2,
  MenuBoard,
  Message,
  Profile2User,
} from "iconsax-react";
import isLinkActive from "../../../../Utils/Functions/isLinkActive";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { themeToggle } from "../../../../Utils/Redux/reducers/themeReducer";

export default function Header({ setShow, show }) {
  const dispatch = useDispatch()
  const [mobShow, setMobShow] = useState(false);
  const theme = localStorage.getItem("theme");
  const [lngShow, setLngShow] = useState(false);
  const { t, i18n } = useTranslation();
  const lang = localStorage.getItem("language");

  const lngChange = (target) => {
    i18n.changeLanguage(target);
    localStorage.setItem("language", target);
    setLngShow(!show);
    window.location.reload();
  };

  const urls = {
    links: [
      {
        id: crypto.randomUUID(),
        title: t("dashboard.routes.home"),
        icon: <Home2 />,
        to: "",
      },
      {
        id: crypto.randomUUID(),
        title: t("dashboard.routes.courses"),
        icon: <Folder2 />,
        to: "courses",
      },
      {
        id: crypto.randomUUID(),
        title: t("dashboard.routes.articles"),
        icon: <Bookmark2 />,
        to: "articles",
      },
      {
        id: crypto.randomUUID(),
        title: t("dashboard.routes.menus"),
        icon: <MenuBoard />,
        to: "menus",
      },

      {
        id: crypto.randomUUID(),
        title: t("dashboard.routes.users"),
        icon: <Profile2User />,
        to: "users",
      },
      {
        id: crypto.randomUUID(),
        title: t("dashboard.routes.categories"),
        icon: <Category2 />,
        to: "categories",
      },
      {
        id: crypto.randomUUID(),
        title: t("dashboard.routes.comments"),
        icon: <Message />,
        to: "messages",
      },
    ],
  };
  const clickAction = () => {
    setMobShow(false);
  };

  return (
    <>
      <div className="w-full lg:visible hidden invisible  py-4 bg-white dark:bg-[#242A38] mb-10 px-20 lg:flex items-center justify-between">
        <div>
          <button
            onClick={() => setShow(!show)}
            className="flex items-center justify-center"
          >
            <HambergerMenu />
          </button>
        </div>
        <div
          className={`flex items-center gap-4 ${
            lang === "english" ? "flex-row-reverse" : ""
          } `}
        >
          <ThemeButton />
          <div className="relative">
            <button
              onClick={() => setLngShow(!lngShow)}
              className={`flex items-center gap-2 flex-row-reverse`}
            >
              <span>
                <ArrowDown2 className="w-4 text-gray-500" />
              </span>
              <span
                className={`uppercase text-gray-500 ${
                  i18n.language == "persian" ? "" : "font-sans"
                }`}
              >
                {i18n.language === "persian" ? "پارسی" : "english"}
              </span>
              <span>
                <img
                  src={
                    i18n.language === "persian"
                      ? "https://upload.wikimedia.org/wikipedia/commons/a/a8/State_flag_of_Iran_%281933%E2%80%931964%29.svg"
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/640px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
                  }
                  alt="english"
                  className="w-12 object-cover h-6"
                />
              </span>
            </button>
            <div
              onClick={(event) => lngChange(event.target.value)}
              className={`absolute left-0 w-[140px] bg-white border dark:border-white/10 dark:bg-[#2c3446] shadow-lg top-[120%] rounded-md duration-150 child:flex child:items-center child:justify-center child:py-1.5 child:w-full ${
                lngShow ? "" : "opacity-0 invisible"
              } p-1 child:px-3 font-sans`}
            >
              <button value={"persian"}>Persian</button>
              <button value={"english"}>English</button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 px-6 flex items-center lg:hidden lg:invisible justify-between w-full bg-white dark:bg-[#242A38] mb-10">
        <button onClick={() => setMobShow(!mobShow)}>
          <HambergerMenu />
        </button>

        <div
          onClick={() => setMobShow(!mobShow)}
          className={`fixed duration-150 w-full h-screen top-0 right-0 bg-black/20 backdrop-blur-sm ${
            mobShow ? "" : "opacity-0 invisible"
          }`}
        ></div>
        <div
          className={`fixed top-0 duration-300 ${
            lang === "persian" ? "right-0" : "left-0"
          } bg-white dark:bg-slate-700 w-[245px] h-screen child:flex child:items-center child:p-3.5 child:rounded-lg pr-2 pl-3 child:gap-4 pt-5 ${
            mobShow && lang === "persian" ? "" : "translate-x-[500px]"
          }`}
        >
          {_.map(urls.links, (link) => (
            <NavLink
              className={isLinkActive()}
              key={link.id}
              end={link.to == "" ? true : false}
              to={link.to}
              onClick={() => clickAction()}
              children={
                <>
                  <span>{link.icon}</span>
                  <span>{link.title}</span>
                </>
              }
            />
          ))}

          <button onClick={() => {
            dispatch(themeToggle())
            clickAction()
          }} className="mt-3 text-sm w-full">
            {theme === "dark" ? (
              <>
                <span className="text-zinc-500 dark:text-slate-400">
                  <Sun1 />
                </span>
                <span>{t("texts.theme.light")}</span>
              </>
            ) : (
              <>
                <span className="text-zinc-500 dark:text-slate-400">
                  <Moon className="w-5 pb-1" />
                </span>
                <span>{t("texts.theme.dark")}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
