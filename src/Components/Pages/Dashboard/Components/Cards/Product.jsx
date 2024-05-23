import { Profile2User } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Product({ editable, course }) {
  console.log(course);
  const ProductData = {
    Header: (
      <header>
        <Link to={`/course/${course.shortName}`}>
          <img src={course.cover} alt={course.name} className="rounded-2xl" />
        </Link>
      </header>
    ),
    Main: (
      <main>
        <Link to={`/course/${course.shortName}`}>
          <h3 className="font-Dana-Demi text-lg  line-clamp-1  dark:text-[white] text-[#1B2559]">
            {course.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between text-sm pt-0.5">
          <div className="flex text-[#A3AED0] duration-150   cursor-pointer select-none items-center gap-1">
            <span>مدرس دوره:</span>
            <span className="text-base  text-zinc-500/80  dark:text-white/60">
              {course.creator.name}
            </span>
          </div>
        </div>
      </main>
    ),
    Editable: editable && <div>Tap to edit.</div>,
    Footer: (
      <footer className="pt-3 flex items-center justify-between">
        <div className="flex gap-1 items-center text-sm text-zinc-500 dark:text-light">
            <span>
                <Profile2User variant="Bold" className="w-5"/>
            </span>
            <span>
                دانشجو:
            </span>
            <span>
                425
            </span>
        </div>
        <div>
            <Link to={`courses`} className="px-4 py-2 text-white rounded-lg bg-[#7551FF] text-xs">
                مدیریت
            </Link>
        </div>
      </footer>
    ),
  };

  return (
    <article className="px-[15px] space-y-2 w-full pt-[17px] pb-[22px] dark:bg-[#111C44] shadow-sm bg-white rounded-2xl">
      {ProductData.Header}
      {ProductData.Main}
      {ProductData.Editable}
      {ProductData.Footer}
    </article>
  );
}
