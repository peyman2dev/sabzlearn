import { ArrowLeft2 } from "iconsax-react";
import _ from "lodash";
import React, { useState } from "react";

const Accordion = ({ title, childrens }) => {
  const [show, setShow] = useState(false);
  return (
    <article className="relative p2d-accordion">
      <div
        onClick={() => setShow(!show)}
        className={`w-full h-14 cursor-pointer text-sm duration-150 select-none  rounded-lg  flex items-center justify-between ${
          show ? "bg-teal-500 shadow-lg shadow-teal-950/10 to-green-900 text-white" : "bg-gray-100 dark:bg-dark-700"
        } px-6`}
      >
        <span className="font-Dana-Demi">
        {title}
        </span>
        <span className={`duration-150 ${show ? "-rotate-90" : ""}`}>
            <ArrowLeft2 className="w-5"/>
        </span>
      </div>
      <div className={`h-0 ${show ? "h-full" : "h-0  opacity-0 invisible"} child:bg-gray-50 overflow-hidden child:duration-150 duration-150 child:h-14 child:text-sm child:px-8 child:items-center child:flex child:justify-between child:dark:bg-dark-600 child:rounded-lg`}>
        {childrens && childrens.length ? _.map(childrens, (accordion) => (
          <div>Hi !</div>
        ))
        :
        <div>
        فعلا چیزی قرار نگرفته !
        </div>
    }
      </div>
    </article>
  );
};

export default Accordion;
