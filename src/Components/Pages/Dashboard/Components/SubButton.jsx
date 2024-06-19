import { ArrowLeft2 } from "iconsax-react";
import _ from "lodash";
import React from "react";
import { NavLink } from "react-router-dom";

const SubButton = ({ button }) => {
  const [show, setShow] = React.useState(false);
  console.log(button);
  return (
    <div>
      <button
        onClick={() => setShow(!show)}
        className={`flex w-full min-h-12 px-6 items-center justify-between gap-2 ${
          show ? " bg-red-500 dark:bg-primary" : ""
        }`}
      >
        <div className="flex items-center gap-1.5">
            <span>
                {button.icon}
            </span>
          <span>{button.title}</span>
        </div>
        <span>
          <ArrowLeft2
            size={14}
            className={`duration-150 ${show ? "-rotate-90" : ""}`}
          />
        </span>
      </button>
      <div
        className={` divide-y dark:divide-primary/5 dark:bg-dark-md ${
          show ? "" : "opacity-0 invisible h-[0]"
        } text-sm`}
      >
        {_.map(button.submenus, (sub) => (
          <NavLink
          onClick={() => setShow(false)}
            to={`/dashboard/${sub.to}`}
            className={({ isActive }) =>
              isActive
                ? "px-10 gap-1.5 duration-150 dark:bg-dark-sm/40 min-h-10 flex items-center opacity-100"
                : "px-10 gap-1.5 duration-150 hover:bg-dark-sm/40 min-h-10 flex items-center opacity-30"
            }
            end={sub.to == "" || "sessions" ? true : false}
          >
            <span>
                {sub.icon}
            </span>
            <span>
            {sub.title}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SubButton;
