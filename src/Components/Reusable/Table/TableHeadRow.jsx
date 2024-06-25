import React from "react";

const TableHeadRow = ({ children }) => {
  return (
    <div className="h-10  text-center child:w-full  text-sm  px-8 select-none justify-evenly dark:bg-dark-700 w-full flex items-center">
        {children}
    </div>
  );
};

export default TableHeadRow;
