import { Receive, Transmit } from "iconsax-react";
import React from "react";

export default function DetailCard({
  icon,
  color,
  title,
  value,
  cap,
  timeline,
}) {
  const lang = localStorage.getItem("language");
  console.log(lang);
  return (
    <article className="w-full p-3 bg-white rounded-lg dark:bg-[#273142] border border-white/5 flex gap-3 justify-between">
      <div>
        <h3 className="font-Dana-Medium text-gray-500 dark:text-slate-400">
          {title}
        </h3>
        <div className="mt-3">
          <span className="font-bold text-2xl ">{value.toLocaleString()}</span>
          <span className="dark:text-slate-400">{cap}</span>
        </div>
        <div className="mt-3 flex items-center gap-1">
          <span className={timeline >= 0 ? "text-green-500" : "text-red-500"}>
            {timeline >= 0 ? (
              <Transmit className="w-5 pb-1" />
            ) : (
              <Receive className="w-5 pb-1" />
            )}
          </span>
          <span
            className={`text-lg font-medium ${
              timeline >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {timeline}%
          </span>
          <span className="text-sm px-1 inline-block dark:text-slate-400 text-zinc-700">
            {timeline >= 0 && lang === "persian" && "افزایش نسبت به ماه گذشته"}
            {timeline <= 0 && lang === "persian" && "کاهش نسبت به ماه گذشته"}
            {timeline >= 0 && lang === "english" && "Up from yesterday"}
            {timeline <= 0 && lang === "english" && "Down from yesterday"}

          </span>
        </div>
      </div>
      <div
        className={`w-12 flex items-center justify-center ${color} bg-opacity-10 rounded-full h-12`}
      >
        {icon}
      </div>
    </article>
  );
}
