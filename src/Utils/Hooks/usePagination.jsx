import React, { useEffect, useState } from "react";

const usePagination = ({ setItemsTo, pageSize }) => {
    const [initItems, setInitItems] = useState([])
  const [current, setCurrent] = useState(1);
  let pages = Math.ceil(initItems?.length / pageSize);
  //   Fetcher function
  const fetcher = () => {
    let lastIndex = pageSize * current;
    let startIndex = lastIndex - pageSize;
    setItemsTo(initItems?.slice(startIndex, lastIndex));
  };

  useEffect(() => {
    fetcher();
  }, [initItems, current]);
  
  const switchPage = i => {
    setCurrent(i)
  }


  const buttons = (
    className
 ) => {
    let btns = [];
    for (let i = 1; i <= pages; i++) {
      btns.push(
        <li key={i} onClick={() => switchPage(i)} className={`${className ? className : ""} cursor-pointer  pt-1 px-3 text-sm border dark:border-dark-200/10 rounded-md ${current == i ? "dark:bg-dark-700" : "dark:bg-dark-800"}`}>
          <span>{i}</span>
        </li>
      );
    }

    return btns;
  };

  return { buttons, setInitItems, switchPage };
};

export default usePagination;
