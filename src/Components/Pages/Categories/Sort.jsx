import React, { useContext } from "react";
import { PiSortAscending } from "react-icons/pi";
import CategoriesProvider from "../../../Utils/Contexts/CategoriesProvider";
import _ from "lodash";

export default function Sort() {
  const { sorts, sort } = useContext(CategoriesProvider);

  const handleSortClick = (_sort) => {
    sort.setActiveSort(_sort.id);
  };

  return (
    <>
    <div className="w-full lg:visible lg mb-3.5 h-[68px] dark:bg-dark-md bg-white dark:border-t-white/10 dark:border-r-white/10 lg:flex hidden invisible items-center gap-3 px-5 rounded-lg dark:border dark:border-white/5">
      <div className="flex items-center dark:text-slate-300 text-zinc-600 gap-2">
        <span className="text-2xl">
          <PiSortAscending />
        </span>
        <span>مرتب سازی بر اساس :</span>
      </div>
      {_.map(sorts, (_sort) => (
        <button
          key={_sort.id}
          onClick={() => handleSortClick(_sort)}
          className={`h-full ${_sort.id === sort.activeSort ? "font-Dana-Demi" : "text-zinc-500"}`}
        >
          {_sort.title}
        </button>
      ))}
    </div>

    </>
  );
}
