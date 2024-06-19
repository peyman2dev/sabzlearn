import React from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return { isOpen, toggleOpen };
};

export default useModal;
