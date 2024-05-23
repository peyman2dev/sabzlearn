import React from "react";

export default function TableRow({ children }) {
  return (
    <div className="w-full child:w-full items-start justify-between flex">{children}</div>
  );
}
