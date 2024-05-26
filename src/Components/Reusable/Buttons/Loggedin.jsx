import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Profile from "../Dropdowns/Profile";

export default function Loggedin() {
  const { user } = useSelector((state) => state.server);

  return (
    <div>
      {user.isLoggedIn ? (
       <Profile />
      ) : (
        <div className=" h-12 child: flex items-center  text-white rounded-l-3xl rounded-r-3xl bg-sky-500/50">
          <Link to={`/auth/login`} className="px-3 pr-5 ">
          ورود
          </Link>
          <Link to={`/auth/register`} className="px-5 flex items-center rounded-s-3xl rounded-e-3xl bg-sky-600/50 hover:bg-sky-600 duration-150 h-full">
          عضویت
          </Link>
        </div>
      )}
    </div>
  );
}
