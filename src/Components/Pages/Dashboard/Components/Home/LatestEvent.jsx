import { Percent } from "@mui/icons-material";
import React from "react";
import { BsClock } from "react-icons/bs";
import { GiFireBowl } from "react-icons/gi";

export default function LatestEvent() {
  return (
    <article className="dark:bg-dark-sm child:p-6 overflow-hidden flex flex-col justify-between bg-white shadow-sm rounded-2xl w-full">
      <header className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-3xl dark:bg-[#1B254B]">
          <span>
            <GiFireBowl />
          </span>
        </div>
        <div>
          <span className="text-xs text-light">بررسی آخرین رویداد</span>
          <p className="font-Dana-Medium">عیدی ما به شما !</p>
        </div>
      </header>
      <main>
        <div>
          <p className="text-xl font-Dana-Bold">
            جشنواره 1404 رو میخوای از دست بدی ؟ :))
          </p>
        </div>
      </main>
      <footer className="w-full flex flex-col justify-between h-[149px] bg-light/20 dark:bg-[#1B254B]">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <span className="text-xl text-green-500">
              <BsClock />
            </span>
            <span className="font-Dana-Medium">7 روز</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xl text-red-500">
              <Percent />
            </span>
            <span className="font-Dana-Medium">تا 60%</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative  flex items-center child:absolute child:min-w-10 child:min-h-10 child:rounded-full child:object-cover child:overflow-hidden">
              <img
                src="/images/users/user2.jpg"
                className=""
                alt="User Profile"
              />
              <img
                src="/images/users/user.jpg"
                className="right-2 z-[1]"
                alt="User Profile"
              />
              <img
                src="/images/users/user3.jpg"
                className="right-3 z-[2]"
                alt="User Profile"
              />
              <img
                src="/images/users/user2.jpg"
                className="right-4 z-[3]"
                alt="User Profile"
              />
              <img
                src="/images/users/user.jpg"
                className="right-5 z-[4]"
                alt="User Profile"
              />
              <img
                src="/images/users/user3.jpg"
                className="right-6 z-[5]"
                alt="User Profile"
              />
              <img
                src="/images/users/user2.jpg"
                className="right-7 z-[6]"
                alt="User Profile"
              />
              <img
                src="/images/users/user.jpg"
                className="right-8 z-[7]"
                alt="User Profile"
              />
              <span className="bg-dark right-10 z-10 text-white flex items-center justify-center"> +10</span>
            </div>
          </div>
          <div>
            <button className="px-4 rounded-md py-1.5 text-white text-sm active-animation bg-primary dark:bg-[#7551FF]">
              مدیریت جشنواره
            </button>
          </div>
        </div>
      </footer>
    </article>
  );
}
