import React from "react";
import PropTypes from "prop-types";
/**
 * @param { true | false} param1
 * @param {"success" | "info" | "error"} param0
 */

function Modal({children,show, setShow}) {
  return (
    <div
      onClick={() => setShow(!show)}
      className={`w-full flex items-center select-none justify-center fixed top-0 duration-150 bg-black/50 backdrop-blur-sm right-0 h-screen ${
        show ? "" : "opacity-0 invisible"
      } `}
    >
        <div onClick={(event) => event.stopPropagation()} className="w-[500px] bg-white rounded-2xl">
        {children}
        </div>
    </div>
  );
}

Modal.prototype = {
  icon: PropTypes.oneOf("success" | "info" | "error").isRequired,
};

export default Modal;


// <header className="py-4 px-5 flex items-center justify-between">
// <p className="text-lg text-slate-800 font-Dana-Demi">حذف دوره</p>
// <button onClick={() => setShow(!show)} className="text-slate-500">
//   <Close />
// </button>
// </header>