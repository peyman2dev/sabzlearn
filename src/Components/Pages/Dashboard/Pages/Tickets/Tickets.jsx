import React, { useEffect, useState } from "react";
import useDatas from "../../../../../Utils/Hooks/ApiHooks/useDatas";
import usePagination from "../../../../../Utils/Hooks/usePagination";
import Tippy from "@tippyjs/react";
import Selectbox from "../../../../Reusable/Dropdowns/Selectbox";
import useSelectbox from "../../../../../Utils/Hooks/useSelectbox";
import { Search } from "@mui/icons-material";
import searchHandler from "../../../../../Utils/Functions/searchHandler";
import TableHead from "../../../../Reusable/Table/TableHead";
import TableHeadRow from "../../../../Reusable/Table/TableHeadRow";
import TableRow from "../../../../Reusable/Table/TableRow";
import Table from "../../../../Reusable/Table/Table";

const Tickets = () => {
  const { onOpen, quickSelect } = useSelectbox();
  const [tickets, setTickets] = useState();

  const { buttons, setInitItems, switchPage } = usePagination({
    pageSize: 4,
    setItemsTo: setTickets,
  });

  const inputRef = React.useRef();

  const { data } = useDatas();

  useEffect(() => {
    setInitItems(data[6]);
  }, [data]);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-Dana-Demi ">داشبورد | مدیریت کاربران</h1>
      </div>
      <Table>
        <TableHead title={"تیکت ها"} items={data[6]}>
          <div className=" h-8 dark:bg-dark-700 relative w-[200px] items-center flex">
            <Search
              className="absolute text-lg opacity-45 w-3 right-2"
              fontSize="18px"
            />
            <input
              onChange={searchHandler}
              ref={inputRef}
              type="text"
              className="bg-transparent outline-none w-full text-sm h-full px-8 absolute right-0 top-0 placeholder:text-xs"
              placeholder="جستجو کنید .."
            />
          </div>
        </TableHead>
        <main className="border-y child:px-14  dark:border-white/5">
          <TableHeadRow>
            <span>#</span>
            <span>نام کاربر</span>
            <span>دپارتمان</span>
            <span>اولویت</span>
            <span>به روز شده در </span>
            <span>وضعیت</span>
          </TableHeadRow>
          <div>
            {/* Table rows */}
            {tickets && tickets.length ? (
              tickets.map((ticket) => (
                <TableRow key={ticket?._id}>
                  {console.log(ticket)}
                  <p className="text-sm text-sky-600">
                    #{ticket._id.slice(0, 6)}
                  </p>
                  <p>{ticket.user}</p>
                  <div className="flex items-center justify-center">
                    <p className="px-2 text-xs max-w-max py-1 text-center rounded-md bg-teal-500/5 text-teal-500 select-none">
                      {ticket.departmentSubID}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <p
                      className={`px-2 text-xs max-w-max py-1 text-center rounded-md bg-teal-500/5 text-teal-500 select-none ${
                        ticket.priority ? "bg-red-500/5 text-rose-600" : ""
                      }`}
                    >
                      {ticket.priority ? "مهم" : "عادی"}
                    </p>
                  </div>
                  <div className="flex items-center text-xs justify-center">
                    <Tippy  content={ticket.updatedAt.slice(11, 19)}>
                      <span className="px-3 bg-green-500/5 rounded-sm text-green-600 pt-1.5 pb-1 font-Dana-Demi">{ticket.updatedAt.slice(0, 10)}</span>
                    </Tippy>
                  </div>
                  <div className="flex items-center justify-center">
                    <p
                      className={`px-2 text-xs max-w-max py-1 text-center rounded-md  select-none ${
                        ticket.isAnswer
                          ? "bg-green-500 text-white"
                          : "bg-sky-600 text-white"
                      }`}
                    >
                      {ticket.isAnswer ? "پاسخ داده شده" : "منتظر پاسخ"}
                    </p>
                  </div>
                </TableRow>
              ))
            ) : (
              <div className="w-full flex items-center gap-4 py-6 min-h-20 text-lg flex-col justify-center">
                <p>کاربری پیدا نشد</p>
                <button
                  className="text-xs px-3 py-1 rounded-md bg-teal-500"
                  onClick={() => {
                    // setDefaultItems();
                    quickSelect({
                      title: "پیش فرض",
                    });
                  }}
                >
                  تلاش مجدد
                </button>
              </div>
            )}
          </div>
        </main>
        <footer className=" w-full flex items-center justify-center py-4 dark:bg-dark-900/50">
          <ul className="flex items-center gap-1">{buttons("select-none")}</ul>
        </footer>
      </Table>
    </>
  );
};

export default Tickets;
