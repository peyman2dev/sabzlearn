import React from "react";

export default function ModalFooter({ style, children }) {
  return <footer className={`${style} flex items-center justify-end py-1`}>
    {children}
  </footer>;
}
