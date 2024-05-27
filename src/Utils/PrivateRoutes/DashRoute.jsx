import { Arrow, ArrowLeft2 } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../Components/Reusable/Buttons/Button";

export default function DashRoute({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const user = useSelector((state) => state.server.user.userInfos);

  const backToHome = () => window.location.pathname = "/"
  

  const filtering = () => {
    if (user.role === "ADMIN") {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
    setIsLoading(false); // Set isLoading to false after filtering
  };

  useEffect(() => {
    if (user) {
      filtering();
    } else {
      setIsLoading(false); // Ensure loading stops even if no user is found
    }
  }, [user]);

  if (isLoading) {
    return "Loading...";
  }

  return isAuthorized ? (
    children
  ) : (
    <div
      className="w-full h-screen flex items-center flex-col gap-5 bg-white text-[#3a3a3a] justify-center"
    >
      <div className="text-center">
        <h2 className="text-[100px] font-sans font-black text-sky-500 ">
          403
        </h2>
        <h1 className="font-Dana-Black tracking-tighter text-3xl">
            شما دسترسی کافی ندارید!
        </h1>
        <p className="mt-4 w-3/5 mx-auto text-zinc-400">
          کاربر محترم شما دسترسی کافی برای ورود به این صفحه را ندارید !
          در صورتی که احساس مشکلی پیش آمده ست با پشتیبانی تماس بگیرید
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4 text-xs">
        <Button title={"تماس با پشتیبانی"} variant="light"/>
        <Button action={backToHome} title="بازگشت به خانه" icon={<ArrowLeft2 className="w-2.5"/>} variant="secondary"/>
      </div>
    </div>
  );
}
