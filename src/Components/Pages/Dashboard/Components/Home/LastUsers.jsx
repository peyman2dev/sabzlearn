import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function LastUsers() {
  const users = useSelector((state) => state.server.users);

  console.log(users)
  const TABLE_HEAD = [
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
    {
      field: "role",
      headerName: "مدیریت",
      width: 160,
    },
  ];

  return (
    

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-dark-sm dark:text-gray-400">
            <tr>
          {
            _.map(TABLE_HEAD, (th,i) => (
              <th scope="col" class="px-6 py-3">
                {th.headerName}
          </th>
            ))
          }
           
            </tr>
        </thead>
        <tbody>
          {
            _.map(users, (user,index) => (
              <tr class="odd:bg-white dark:bg-dark-sm  even:bg-gray-50  border-b dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
               {
                index+1
               }
              </th>
              <td class="px-6 py-4">
           {user.name}
              </td>
              <td class="px-6 py-4">
                  {user.username}
              </td>
              <td class="px-6 py-4">
                  {user.role == "USER" ? 
                  <span className="text-xs px-3 rounded-md border border-yellow-500/15 select-none p-1 bg-yellow-500/15 text-yellow-500">
                      کاربر
                  </span>
                  :
                  "مدیر"
                  }
              </td>
              <td class="px-6 py-4">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    مدیریت
                  </a>
              </td>
          </tr>
              
            ))
          }
         
        </tbody>
    </table>
</div>

  );
}


{/* <div className=" dark:bg-dark-sm bg-white p-5 rounded-2xl">
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
</div> */}