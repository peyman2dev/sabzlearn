import { ArrowLeft2 } from "iconsax-react";
import _ from "lodash";
import React, { useState } from "react";
import StyledLink from "./StyledLink";
import { Link } from "react-router-dom";
import Home from "../Pages/Home/Home";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
const Sidebar = ({ routes }) => {
  const [show, setShow] = useState(true);

  const homeRoute = {
    id: crypto.randomUUID(),
    icon: <KeyboardReturnIcon className="text-xl" />,
    title: "خانه",
    to: "/",
    element: <Home />,
  };

  return (
    <aside
      className={`min-h-screen h-full whitespace-nowrap px-3 sidebar duration-300 ${
        show ? " w-[250px] " : "w-[80px]"
      } dark:bg-dark-800 bg-white relative`}
    >
      <button
        onClick={() => setShow(!show)}
        className="absolute bg-white -left-[23.9px] top-1/2 py-2 px-0.5 pl-2 rounded-l-full dark:bg-dark-800"
      >
        <ArrowLeft2
          size={14}
          className={`${
            show ? "rotate-180" : ""
          } duration-150 dark:text-white/50`}
        />
      </button>
      <header
        className={`flex w-[90%] mx-auto items-center duration-300  pt-10`}
      >
        <Link className="flex items-center overflow-hidden whitespace-nowrap gap-2">
          <div>
            <img
              src="/images/logo.png"
              className={`${
                show ? "min-w-16 max-w-16" : "min-w-12 max-w-12"
              } duration-150`}
              alt=""
            />
          </div>
          <p className={`duration-150`}>داشبورد ادمین</p>
        </Link>
      </header>
      <main className="items space-y-1.5 pt-10 w-[90%] mx-auto h-full overflow-hidden">
        {_.map(routes, (route) => (
          <StyledLink toggle={show} route={route} key={route.id} />
        ))}
        <StyledLink toggle={show} route={homeRoute} key={homeRoute.id} />
      </main>
    </aside>
  );
};

export default Sidebar;
