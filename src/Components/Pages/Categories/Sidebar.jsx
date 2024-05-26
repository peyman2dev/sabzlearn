import React, { useContext, useState } from "react";
import CategoriesProvider from "../../../Utils/Contexts/CategoriesProvider";
import _ from "lodash";
import FilterButton from "../../Reusable/Buttons/FilterButton";
import SearchInput from "../../Reusable/SearchInput/SearchInput";
import { SidebarTop } from "iconsax-react";
import { Check, Close, FilterAlt, Sort } from "@mui/icons-material";

export default function Sidebar() {
  const [filterShow, setFilterShow] = useState(false);
  const [sortShow, setSortShow] = useState(false);
  const { filters, searchHandler, sort, sorts } =
    useContext(CategoriesProvider);
  const targetSort = _.find(sorts, (_sort) => sort.activeSort == _sort.id);
  return (
    <>
      <aside className="min-w-[294px] lg:visible lg:block hidden invisible space-y-3">
        <SearchInput
          classes={"lg:visible lg:flex hidden invisible"}
          handler={searchHandler}
        />

        {_.map(filters, (filter) => (
          <FilterButton key={filter.id} {...filter} />
        ))}
      </aside>
      <SearchInput
        classes={"lg:hidden flex lg:invisible"}
        handler={searchHandler}
      />

      {/* Mobile Filter Options */}
      <div className="grid lg:hidden lg:invisible grid-cols-2 child:w-full child:h-12 child:overflow-hidden child:rounded-lg child:dark:bg-dark-md gap-3 my-4">
        <div>
          <button
            onClick={() => setFilterShow(!filterShow)}
            className="w-full h-full flex items-center justify-center gap-2"
          >
            <span>
              <FilterAlt />
            </span>
            <span>فیلتر</span>
          </button>
          <div
            className={` duration-150 w-full  fixed right-0  dark:bg-dark ${
              filterShow ? "h-screen bottom-0" : "bottom-0 h-0"
            }`}
          >
            {/* Header */}
            <div className="py-4 w-full dark:bg-dark-md flex bg-gray-200  items-center justify-between px-5">
              <span>فیلترها</span>
              <button onClick={() => setFilterShow(!filterShow)}>
                <Close />
              </button>
            </div>
            {/* Main */}

            <div>
              {_.map(filters, (filter) => (
                <FilterButton key={filter.id} {...filter} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <button
            onClick={() => setSortShow(!sortShow)}
            className="w-full h-full flex items-center justify-center gap-2"
          >
            <span>
              <Sort />
            </span>
            <span>{targetSort.title}</span>
          </button>
          <div
            onClick={() => setSortShow(false)}
            className={`fixed  right-0 bg-black/50  w-full h-screen duration-150 ${
              sortShow ? "bottom-0" : "bottom-0 h-0"
            }`}
          ></div>
          <div
            className={`w-full fixed  bg-white rounded-t-3xl overflow-hidden dark:bg-dark right-0 bottom-0 duration-300 ${
              sortShow ? "h-2/5" : "h-0"
            }`}
          >
            <div className="py-4 w-full dark:bg-dark-md flex bg-gray-200  items-center justify-between px-5">
              <span>مرتب سازی بر اساس</span>
              <button
                className="text-slate-500"
                onClick={() => setSortShow(false)}
              >
                <Close />
              </button>
            </div>
            <div className="divide-y py-2 px-4 dark:divide-white/10">
              {_.map(sorts, (_sort, i) => (
                <button
                  value={_sort.id}
                  onClick={() => {
                    setSortShow(false);
                    sort.setActiveSort(_sort.id);
                  }}
                  className={`flex w-full px-5 py-3 justify-between ${
                    targetSort.id == _sort.id ? "text-green-500" : ""
                  }`}
                >
                  <span>{_sort.title}</span>
                  {targetSort.id == _sort.id && (
                    <span>
                      <Check />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
