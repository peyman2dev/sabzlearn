import React, { useEffect, useState } from "react";
import _ from "lodash";

function Pagination({ defaultItems, setPaginated, slidesPreView }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(defaultItems.length / slidesPreView);

  useEffect(() => {
    render();
  }, [currentPage, defaultItems]);

  const render = () => {
    const lastIndex = currentPage * slidesPreView;
    const startIndex = lastIndex - slidesPreView;
    setPaginated(_.slice(defaultItems, startIndex, lastIndex));
  };

  const slideChange = (pageID) => {
    setCurrentPage(pageID);
  };

  const buttonRendering = () => {
    let buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <li
          key={i}
          onClick={() => slideChange(i)}
          className={`cursor-pointer font-sans h-full px-3.5 flex items-center justify-center ${
            currentPage === i ? "bg-sky-500 text-white" : "bg-gray-100"
          }`}
        >
          <span>{i}</span>
        </li>
      );
    }
    return buttons;
  };

  return (
    <div className="w-full mt-6 flex items-center justify-center">
      <ul className="flex items-center flex-row-reverse rounded-l-md   rounded-r-md overflow-hidden -space-x-px h-7 text-sm">
        {buttonRendering()}
      </ul>
    </div>
  );
}

export default Pagination;
