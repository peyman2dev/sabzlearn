import React from "react";
import ModalContext from "../../../Utils/Contexts/ModalContext.js";

const ModalProvider = ({ isOpen, toggleModal, children }) => {
  const { Provider } = ModalContext;
  return <Provider value={{
    isOpen,
    toggleModal
  }}>
    {children}
  </Provider>;
};

export default ModalProvider;
