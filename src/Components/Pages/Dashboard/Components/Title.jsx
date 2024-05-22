import { ArrowLeft2 } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Title({ title, link }) {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h3 className="font-bold text-2xl">{title}</h3>
      </div>
      {link ? <div>
        <Link className="px-4 py-2.5  rounded-md bg-black/15 duration-300 flex items-center gap-1 hover:bg-[#2f2f2f] hover:text-white" to={link.url}>
          <span>
        {link.title}
          </span>
          <span>
        <ArrowLeft2 className="w-5"/>
          </span>
        </Link>
        </div> : ""}
    </header>
  );
}
