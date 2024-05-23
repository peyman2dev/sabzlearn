import Tippy from "@tippyjs/react";
import React from "react";
import { HiOutlineIdentification } from "react-icons/hi";
import { IoMdMore } from "react-icons/io";

export default function OnlineUsers() {
  const flexBetween = "flex items-center justify-between";

  return (
    <article className="dark:bg-dark-sm p-5 bg-white shadow-sm rounded-2xl lg:w-[382px]">
      <header className={flexBetween}>
        <div>
          <h4 className="text-xl font-Dana-Bold">کاربران فعال</h4>
        </div>
        <Tippy content="مدیریت">
          <button>
            <IoMdMore className="text-xl dark:text-light" />
          </button>
        </Tippy>
      </header>
      <main className="space-y-3 child:bg-zinc-50 child:border child:border-zinc-50/50 dark:child:border-white/5 mt-6">
        <div className="p-5 rounded-xl w-full  flex items-center justify-between dark:bg-[#1B254B]">
          <div className="flex items-center gap-3">
            <div className="max-w-14 min-w-14 max-h-14 min-h-14 h-14 rounded-full overflow-hidden">
              <img
                src="/images/users/user.jpg"
                alt="User Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className=" font-Dana-Demi">حمید موسوی</p>
              <p className="mt-1.5 text-xs text-light">@callmeh4mid</p>
            </div>
          </div>
          <div>
                <button className="text-xl text-light flex items-center justify-center">
                    <HiOutlineIdentification />
                </button>
          </div>
        </div>
        <div className="p-5 rounded-xl w-full  flex items-center justify-between dark:bg-[#1B254B]">
          <div className="flex items-center gap-3">
            <div className="max-w-14 min-w-14 max-h-14 min-h-14 h-14 rounded-full overflow-hidden">
              <img
                src="/images/users/user2.jpg"
                alt="User Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className=" font-Dana-Demi">احسان هاشمی</p>
              <p className="mt-1.5 text-xs text-light">@mrhashemideve</p>
            </div>
          </div>
          <div>
                <button className="text-xl text-light flex items-center justify-center">
                    <HiOutlineIdentification />
                </button>
          </div>
        </div>
        <div className="p-5 rounded-xl w-full  flex items-center justify-between dark:bg-[#1B254B]">
          <div className="flex items-center gap-3">
            <div className="max-w-14 min-w-14 max-h-14 min-h-14 h-14 rounded-full overflow-hidden">
              <img
                src="/images/users/user3.jpg"
                alt="User Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className=" font-Dana-Demi">پیمان احمدی</p>
              <p className="mt-1.5 text-xs text-light">@peyman2dev</p>
            </div>
          </div>
          <div>
                <button className="text-xl text-light flex items-center justify-center">
                    <HiOutlineIdentification />
                </button>
          </div>
        </div>
      </main>
    </article>
  );
}
