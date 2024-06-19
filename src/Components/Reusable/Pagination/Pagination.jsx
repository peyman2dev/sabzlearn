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

         onClick={() => slideChange(i)}>
          <button
            className={`flex ${
              currentPage == i ? "dark:bg-primaryAccent" : ""
            } items-center pt-1 justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-dark-sm dark:border-gray-700 dark:text-gray-400 dark:hover:bg-dark-md dark:hover:text-white`}
          >
            {i}
          </button>
        </li>
      );
    }
    return buttons;
  };

 

  return (
    <div className="w-full flex items-center justify-center">
      <ul className="flex items-center flex-row-reverse rounded-l-md   rounded-r-md overflow-hidden -space-x-px h-7 text-sm">
     
        {buttonRendering()}
      
      </ul>
    </div>
  );
}

export default Pagination;
