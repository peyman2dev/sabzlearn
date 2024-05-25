import { FilterEdit } from "iconsax-react";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Table from "../../../../Reusable/Table/Table";

export default function LastUsers() {
  const users = useSelector((state) => state.server.users);

  const columns = [
    { field: "_id", headerName: "آیدی", width: 90 },
    {
      field: "name",
      headerName: "نام و نام خانوادگی",
      width: 250,
    },

    {
      field: "username",
      headerName: "نام کاربری",
      width: 160,
    },
    {
      field: "role",
      headerName: "مقام",
      width: 160,
    },


  ];

  return (
    <div className=" dark:bg-dark-sm bg-white p-5 rounded-2xl">
      <header >
        <div className="w-full flex items-center justify-between">
          <p className="text-xl font-Dana-Demi">کاربران اخیر</p>
          <div>
            <button className="p-2 rounded-md text-slate-500 dark:text-slate-300 dark:bg-[#1B254B] bg-gray-50">
              <FilterEdit />
            </button>
          </div>
        </div>
      </header>
      <main className="mt-1 w-full dark:text-[white!important] child:flex child:justify-evenly">
        <Table preView={5} pagination rows={users} columns={columns} />
      </main>
    </div>
  );
}
