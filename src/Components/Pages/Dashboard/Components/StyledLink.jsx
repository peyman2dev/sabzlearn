import Tippy from "@tippyjs/react";
import React from "react";
import { NavLink } from "react-router-dom";
import "tippy.js/dist/tippy.css";
const StyledLink = ({ route, toggle }) => {
  return (
    <Tippy content={route.title} placement="top" disabled={toggle}>
      <NavLink
        end={route.to == "/dashboard" ? true : false}
        to={route.to}
        className={({ isActive }) =>
          isActive
            ? `nav-link bg-green-500 text-white dark:bg-dark-900 rounded-md ${
                toggle ? " " : " rounded-full overflow-hidden "
              }`
            : `nav-link  ${toggle ? "" : ""}`
        }
      >
        <div className="flex items-center gap-1">
          <span className={toggle ? "w-[52px] flex items-center justify-center" : "w-[52px] only-icon px-0"}>
            {route.icon}
          </span>
          <span>{route.title}</span>
        </div>
      </NavLink>
    </Tippy>
  );
};

export default StyledLink;
