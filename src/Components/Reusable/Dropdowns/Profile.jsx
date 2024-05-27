import {
  Blend,
  Folder2,
  Home2,
  Lock,
  Logout,
  Message,
} from "iconsax-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Profile({customStyle}) {
  const user = useSelector((state) => state.server.user.userInfos);
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setShow(!show)}
        className="w-12 h-12 rounded-full overflow-hidden"
      >
        <img
          src="/images/user.jpg"
          alt="پروفایل"
        />
      </button>
      <div
        onClick={() => setShow(!show)}
        className={`${
          show ? "" : "opacity-0 invisible"
        } duration-150 fixed z-10 top-0 right-0 w-full h-screen bg-black/30 backdrop-blur-sm`}
      ></div>
      <div
        className={`${
          show ? "" : "opacity-0 invisible"
        } duration-150 w-[270px] ${customStyle ? customStyle : null} z-[11] rounded-3xl p-5  shadow-lg dark:bg-[#242a38] bg-white absolute left-0`}
      >
        <header className="flex pb-3 items-center gap-3">
          <span className="w-12 h-12 rounded-full bg-cover bg-center bg-[url('/images/user.jpg')]"></span>
          <div>
            <p className="font-Dana-Regular">
              <strong>{user.name}</strong>
            </p>
            <p className="text-sm mt-1.5 text-emerald-500 font-Dana-Medium">
              موجودی: 0 ریال
            </p>
          </div>
        </header>
        <main className="child:flex child:items-center child:gap-3 child:p-3 child-hover:text-white child:rounded-md child-hover:bg-green-500 py-3 border-y child:duration-150 dark:border-white/5 child:relative">
          <Link to={`/my-account/`}>
            <span>
              <Home2 />
            </span>
            <span>پیشخوان</span>
          </Link>
          { user.role === "ADMIN" &&
            <Link to={`/dashboard`}>
            <span>
              <Lock />
            </span>
            <span>پنل مدیریت</span>
          </Link>
          }
          <Link to={`/my-account/courses`}>
            <span>
              <Folder2 />
            </span>
            <span>دوره های من</span>
          </Link>
          <Link to={`/my-account/tickets/`}>
            <span>
              <Message />
            </span>
            <span>تیکت ها</span>
          </Link>
          <Link to={`/my-account/notifications/`}>
            <span>
              <Blend />
            </span>
            <span>اعلانات</span>
          </Link>
          <Link to={`/my-account/details`}>
            <span>
              <Folder2 />
            </span>
            <span>جزئیات حساب</span>
          </Link>
        </main>
        <footer className="pt-1">
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
            className="p-3 w-full gap-3 rounded-md flex items-center duration-150 hover:text-white hover:bg-red-500"
          >
            <Logout />
            <span>خروج</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
