import React from "react";

const TableRow = ({ children }) => {
  return (
    <div
     className="h-24 child:w-full text-sm text-center flex items-center justify-evenly">
      {children}
    </div>
  );
};

export default TableRow;
