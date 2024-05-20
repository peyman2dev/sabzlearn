import { ArrowDown2, HambergerMenu } from "iconsax-react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeButton from "../../../Reusable/Buttons/ThemeButton";

export default function Header({ setShow, show }) {
  const [lngShow, setLngShow] = useState(false);
  const { i18n } = useTranslation();
  const lang = localStorage.getItem('language')

  const lngChange = (target) => {
    i18n.changeLanguage(target)
    localStorage.setItem('language', target)
    setLngShow(!show)
    window.location.reload()
  };
  return (
    <div className="w-full  py-4 bg-white dark:bg-[#242A38] mb-10 px-20 flex items-center justify-between">
      <div>
        <button
          onClick={() => setShow(!show)}
          className="flex items-center justify-center"
        >
          <HambergerMenu />
        </button>
      </div>
      <div className={`flex items-center gap-4 ${lang === "english" ? "flex-row-reverse" : ""} `}>
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
          onClick={event => lngChange(event.target.value)}
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
  );
}
