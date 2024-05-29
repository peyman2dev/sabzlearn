import React from "react";

export default function ModalMain({ children, style }) {
  return <main className={`py-5 border-y my-5 ${style}`}>{children}</main>;
}
