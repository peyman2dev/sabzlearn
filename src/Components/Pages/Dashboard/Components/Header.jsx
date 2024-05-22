import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { themeToggle } from "../../../../Utils/Redux/reducers/themeReducer";
import { InfoCircle, Moon, Notification, SearchNormal1, Sun1 } from "iconsax-react";
import Tippy from "@tippyjs/react";
import "@tippyjs/react/";
import "tippy.js/dist/tippy.css"; // optional

export default function Header() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );
  const d = useDispatch();
  const theme = {
    Handler: () => {
      let _theme = localStorage.getItem("theme");
      _theme === "dark" ? setIsDark(true) : setIsDark(false);
    },
  };
  return (
    <nav className="w-full mb-10 pt-[49px] px-[30px] flex items-center justify-between">
        <div>
        <div className="flex items-center gap-2"></div>
        <h1 className="text-3xl font-Dana-Medium">
            مدیر عزیز; خوش آمدید 🙌
        </h1>
        </div>
      <div className="dark:bg-[#111C44] dark:text-white text-[#A3AED0] bg-[#FFFFFF] py-2.5 px-[11px] rounded-3xl flex items-center gap-5">
      <button className="w-[41px] h-[41px] rounded-full overflow-hidden">
            <img src="https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716336000&semt=ais_user" alt="تصویر مدیر" />
          </button>
      <button>
            <InfoCircle />
          </button>
        <Tippy content="اعلانی وجود ندارد">
          <button>
            <Notification />
          </button>
        </Tippy>
        <button
          onClick={() => {
            d(themeToggle());
            theme.Handler();
          }}
        >
          {isDark ? <Sun1 /> : <Moon />}
        </button>
        <div className="h-[41px] flex items-center relative w-[214px]">
          <SearchNormal1 className="w-5 text-[#2B3674] absolute z-10 h-5 right-3" />
          <input
            type="text"
            className="h-full placeholder:text-sm w-full  top-0 right-0 absolute dark:bg-[#0B1437] rounded-3xl px-11 bg-[#F4F7FE] outline-none"
            placeholder="جستجو کنید .."
          />
        </div>
      </div>
    </nav>
  );
}
