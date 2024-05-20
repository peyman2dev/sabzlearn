import React from "react";
import { Link } from "react-router-dom";
import Linked from "./Linked";
import { Profile2User, Star1, User } from "iconsax-react";

export default function Product(props) {
  const shortURL = `/course/${props.shortName}`;
  return (
    <article className="bg-white dark:bg-[#242a38] rounded-xl overflow-hidden shadow-md w-full">
      <header className="h-[167px] rounded-xl overflow-hidden ">
        <Linked
          url={shortURL}
          children={
            <img
              src={props.cover}
              alt={props.name}
              className="w-full h-full object-cover"
            />
          }
        />
      </header>
      <main className="border-b border-white/5 mx-5 py-3">
        <Linked
          url={shortURL}
          children={
            <h3 className="font-Dana-Demi h-[55px] text-lg text-slate-800 dark:text-white line-clamp-2">
              {props.name}
            </h3>
          }
        />
        <p className="mt-2.5 h-[47px] dark:text-slate-400 text-zinc-500">
          {props.description}
        </p>
        <div className="mt-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span>
              <User className="w-4 text-zinc-500 dark:text-slate-500" />
            </span>
            <Link
              to={"/teacher/peyman2dev"}
              className="text-sm dark:text-slate-400 text-zinc-600"
            >
              پیمان احمدی
            </Link>
          </div>
          <div className="flex items-center gap-1 text-sm dark:text-amber-500 text-amber-500">
            <span className="mt-1 font-Dana-Bold">5.0</span>
            <span>
              <Star1 className="w-4" />
            </span>
          </div>
        </div>
      </main>
      <footer className="pb-4 px-5 py-3 flex items-center text-sm justify-between">
        <div className="flex items-center gap-1">
          <span>
            <Profile2User className="w-5 dark:text-slate-400" />
          </span>
          <span className="dark:text-slate-400 font-Dana-Medium">564</span>
        </div>
        <div className="flex items-center gap-1 text-green-500">
          <span className="text-base font-Dana-Demi">
            {
              props.price > 1 ?
              props.price.toLocaleString()
              :
              <>
              رایگان !
              </>
            }
          </span>
          {  props.price > 1 &&
            <span className="">تومان</span>
          }
        </div>
      </footer>
    </article>
  );
}
