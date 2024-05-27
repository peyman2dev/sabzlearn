import React from "react";
import PropTypes from "prop-types";
import { InfoCircle, Verify } from "iconsax-react";

/**
 * @param { "success" | "info" | "error"}
 */

function ModalMain({ type,message }) {
  return (
    <main className="flex flex-col justify-center items-center border-y p-5">
      <span>
        {type == "success" ? (
          <Verify className="w-14 h-14 text-slate-400" />
        ) : (
          <InfoCircle className="w-14 h-14 text-slate-400" />
        )}
      </span>
      <p className="flex items-center gap-1 mt-3 text-lg text-zinc-400 font-Dana-Regular">
        {message}
      </p>
    </main>
  );
}

ModalMain.prototype = {
  type: PropTypes.oneOf("success" | "info" | "error").isRequired,
};

export default ModalMain;
