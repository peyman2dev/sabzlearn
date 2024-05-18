import { ArrowLeft2 } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Title({ title, desc, url, urlTitle, color }) {
  return (
    <header className="flex flex-col sm:flex-row md:items-center gap-2 justify-between">
      <div>
        <div className="flex items-center gap-2">
            <div  className={`h-2 ${color}  w-5 rounded-sm`}></div>
        <h3 className="sm:text-2xl text-xl md:text-3xl font-Dana-Bold">
            {title}
        </h3>
        </div>
        <p className="sm:mt-3 text-base  sm:text-xl mr-5 font-Dana-Regular text-zinc-500 dark:text-slate-400">
            {desc}
        </p>
      </div>
      <div className="w-full flex sm:inline-block sm:max-w-max justify-end">
        <Link className="flex items-center sm:text-base text-sm gap-1.5 max-w-max border border-sky-500/5 px-4 duration-150 bg-sky-500/10 hover:bg-sky-500/15 text-sky-500 py-2.5 rounded-l-3xl rounded-r-3xl" to={url}>
            <span>
            {urlTitle}
            </span>
            <span>
                <ArrowLeft2 className="w-4 text-sky-500"/>
            </span>
        </Link>
      </div>
    </header>
  );
}
