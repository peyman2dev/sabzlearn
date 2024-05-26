import { Play } from "iconsax-react";
import React from "react";
import { useSelector } from "react-redux";
import Circle from "../../Reusable/Cards/Product/Circle";

export default function Hero() {
  const { isDark } = useSelector((state) => state.theme);
  return (
    <section className="my-[100px] flex-col-reverse child:w-full lg:justify-between gap-6 lg:flex-row text-center w-[95%] mx-auto lg:text-start justify-center xl:pr-[215px] flex items-center">
      <div className="relative z-[1]">
        <h2 className="md:text-[2.5rem] lg:text-[3.5rem] text-zinc-800 dark:text-slate-100 tracking-tight text-4xl lg:leading-[64px] font-Dana-Black">
          آکادمی آموزش
          <br />
          برنامه نویسی سبزلرن
        </h2>
        <p className="mt-6 lg:text-2xl  md:w-4/5 text-slate-600 lg:w-3/5">
          با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با خیال راحت یاد بگیر و
          پیشرفت کن
        </p>
        <div className="mt-6 flex items-center flex-col sm:flex-row justify-center lg:justify-start  duration-150 gap-4">
          <button className="px-5 active-animation py-2.5 rounded-3xl text-white bg-sky-500">
            از این مسیر ها شروع کن
          </button>
          <button className="flex items-center gap-2 font-Dana-Medium">
            <span className="flex items-center justify-center rounded-full bg-green-400 w-12 text-white h-12">
              <Play />
            </span>
            <span>دوره های رایگان</span>
          </button>
        </div>
      </div>
      <div className="relative z-[1]">
        <img
          src={
            isDark
              ? "/images/svgs/hero-dark.svg"
              : "/images/svgs/hero-light.svg"
          }
          alt=""
        />
      </div>
      <Circle classes={"bg-sky-500 top-0 right-0"}/>
      <Circle classes={"bg-green-500 top-14 right-[180px]"}/>
    </section>
  );
}





// https://youtube.com/shorts/6s8fXoRTEjo?si=0dBIDfgfRoVNrs9J