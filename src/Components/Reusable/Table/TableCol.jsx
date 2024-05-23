import React from "react";

export default function TableCol({ field, content }) {
  return (
    <div className="min-w-[162px] w-full py-3 px-4 text-center">
      {field == "_id" ? (
        content.slice(0, 5)
      ) : field === "role" && content === "USER" ? (
        <span className="text-sm px-2 rounded-md bg-yellow-500/10 text-yellow-500">کاربر</span>
      ) : (
        content
      )}
    </div>
  );
}
