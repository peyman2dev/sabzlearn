import React from "react";

const TableHead = ({ items, title, children }) => {
  return (
    <header className="p-5 flex items-center justify-between">
      <div>
        <div className="flex items-center gap-2">
          <p> {title ? title : "لطفا عنوان را وارد نمائید"}</p>
          <span className="text-xs px-2 py-1.5 rounded-md pl-2.5 pb-1 bg-indigo-600 text-white dark:bg-indigo-800">
            {items && items.length ? items.length + " عدد " : "چیزی یافت نشد"}
          </span>
        </div>
        <p className="text-sm mt-1.5 opacity-60 font-Dana-Light">
          پنل پیشرفته مدیریت
        </p>
      </div>
      <div className="flex items-center gap-4 child:h-9  child:dark:bg-dark-700 child:rounded-sm">
        {children}
      </div>
    </header>
  );
};

export default TableHead;
