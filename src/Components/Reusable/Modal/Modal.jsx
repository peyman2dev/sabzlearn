import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

/**
 * @param {"large" |"small"} param0.size
 */

function Modal({ modalShow: { show, setShow }, size, children }) {
  return (
    <section
      onClick={() => setShow(!show)}
      className={`w-full h-screen top-0 overflow-scroll md:overflow-hidden  right-0 flex items-center justify-center duration-150 bg-black/30 fixed backdrop-blur-sm ${
        show ? "" : "opacity-0 invisible"
      }`}
    >
      <div
      onClick={event => event.stopPropagation()}
        className={`${
          size === "large"
            ? "w-full min-h-screen sm:h-auto sm:min-h-max  sm:w-[56%] p-6 bg-white rounded-md"
            : "lg:w-[550px]"
        }`}
      >
        {
          children
        }
      </div>
    </section>
  );
}

Modal.prototype = {
  size: PropTypes.oneOf(["large" |"small"]).isRequired
}

export default Modal;
