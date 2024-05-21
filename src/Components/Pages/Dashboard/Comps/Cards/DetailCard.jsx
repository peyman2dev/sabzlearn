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
    <article className="w-full lg:w-[270px] p-2 px-3.5 border dark:border-white/5 bg-white rounded-lg dark:bg-[#222f40] flex justify-between">
      <div>
        <p className="text-sm mb-3 dark:text-slate-400">{title}</p>
        <div className="flex items-center gap-1">
          <h4 className="text-lg font-bold text-zinc-700 dark:text-slate-200">
            {value.toLocaleString()}
          </h4>
          <span className="text-xs dark:text-slate-500 text-zinc-500 ">
            {cap}
          </span>
        </div>
      </div>
      <div>
        <span
          className={`${color}  flex items-center justify-center w-12 bg-opacity-10 min-h-12 rounded-full`}
        >
          {icon}
        </span>
      </div>
    </article>
  );
}
