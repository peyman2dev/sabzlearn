import React from "react";

export default function TableRow({ children }) {
  return (
    <div className="w-full child:w-full items-start  dark:even:bg-[#1b255983] even:bg-stone-50   justify-between flex">{children}</div>
  );
}
