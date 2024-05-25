import React, { useState } from "react";

export default function Filter({ title, action, id }) {
  const [isActived, setIsActived] = useState(false);

  return (
    <article
      onClick={() => {
        setIsActived(!isActived)
        action(isActived);
      }}
      className="select-none"
    >
      <span>{title}</span>
      <button
        className={`w-12 h-6 rounded-3xl p-0.5  duration-150  ${
          isActived ? " bg-sky-500" : "dark:bg-[#323b4d] bg-gray-50  "
        } flex items-center `}
        id={id}
      >
        <span
          className={`w-5 h-[92%]  duration-150  rounded-full ${
            isActived
              ? "-translate-x-6 bg-white dark:bg-white "
              : " dark:bg-[#1c2842] "
          }`}
        ></span>
      </button>
    </article>
  );
}
