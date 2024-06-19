import React from "react";
import ModalContext from "../../../Utils/Contexts/ModalContext";

const Modal = ({children}) => {
  const {isOpen, toggleModal} = React.useContext(ModalContext)
  
  return (
    <section
    onClick={toggleModal}
      className={`w-full h-screen fixed top-0 right-0 duration-150 flex items-center justify-center bg-black/30 backdrop-blur-sm  ${
        isOpen ? "" : "invisible opacity-0"
      }`}
    >
      <div onClick={(event) => event.stopPropagation()} className="w-[462px] border dark:border-white/5 overflow-hidden rounded-md dark:bg-[#181717]">
        {children}
      </div>
    </section>
  );
};
export default Modal;
