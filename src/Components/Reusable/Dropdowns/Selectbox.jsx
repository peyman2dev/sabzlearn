import _, { isNull } from "lodash";
import React from "react";
import { HiArrowsUpDown } from "react-icons/hi2";
import useSelectbox from "../../../Utils/Hooks/useSelectbox";

const Selectbox = ({ items, className , selected, selector }) => {
  const { open, onOpen, setOpen } = useSelectbox();

  
  return (
    <div
      className={`flex relative items-center text-sm ${className} w-[210px]`}
    >
      <button
      onClick={onOpen}
        className={`w-full ${
          isNull(selected) ? "opacity-60" : ""
        } flex items-center justify-between h-full px-3 text-start text-xs`}
      >
        <span>{selected ? selected.title : "انتخاب نمائید .."}</span>
        <span>
            <HiArrowsUpDown />
        </span>
      </button>
      <div className={`absolute text-xs child:duration-150 child-hover:bg-dark-900/10 overflow-hidden child:w-full w-full top-full child:h-9 child:flex child:items-center child:px-3 duration-150 dark:bg-dark-600 rounded-b-lg ${open ? "min-h-full" : "h-0"}`}>
        {_.map(items, opt => (
            <button onClick={() => {
                opt.fn()
                selector(opt)
                console.log(selected)
                setOpen(false)
            }} key={opt.id}>
                {opt.title}
            </button>
        ))}
      </div>
    </div>
  );
};

export default Selectbox;
