import React from 'react'
import { Search } from "@mui/icons-material";

export default function SearchInput({
    classes,
    handler
}) {
  return (
    <div className={`w-full h-14 rounded-xl  relative ${classes} items-center overflow-hidden bg-white dark:border dark:border-t-white/15 dark:border-white/5 dark:border-r-white/15 dark:bg-dark-md`}>
    <input
    onChange={event => handler(event.target.value)}
      type="text"
      className="w-full h-full bg-transparent outline-none px-5"
      placeholder="نام دوره را جستجو کنید .."
    />
    <span className="absolute left-3 text-slate-500">
      <Search />
    </span>
  </div>
  )
}
