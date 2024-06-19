import React from "react";

const ModalBody = ({ children, className }) => {
  return (
    <main className={`py-10 px-4 border-y dark:border-white/10 ${className}`}>
      {children}
    </main>
  );
};

export default ModalBody;
