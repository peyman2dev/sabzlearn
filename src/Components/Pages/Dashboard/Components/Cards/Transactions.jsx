import { Check, Error } from "@mui/icons-material";
import React from "react";

export default function Transactions() {
  return (
    <div className="w-full bg-white overflow-hidden rounded-2xl shadow">
      <header className="p-6">
        <p className="font-Dana-Bold text-xl">آخرین خرید ها</p>
      </header>
      <main>
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  نام دوره
                </th>
                <th scope="col" class="px-6 py-3">
                  توسط
                </th>
                <th scope="col" class="px-6 py-3">
                  تاریخ
                </th>
                <th scope="col" class="px-6 py-3">
                  واریز شده
                </th>
                <th scope="col" class="px-6 py-3">
                  وضعیت
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  دوره Node js متخصص
                </th>
                <td class="px-6 py-4">rad_front</td>
                <td dir="ltr" class="px-6 font-sans py-4">
                  1403-03-07| 16:24
                </td>
                <td class="px-6  py-4">
                  <span className="font-Dana-Bold text-base text-green-500 ">
                    3,210,000
                  </span>
                </td>
                <td class="px-6  py-4">
                  <span className="font-Dana-Medium text-xs px-3 py-1.5 rounded-md bg-teal-500/10 text-teal-500  ">
                    <Check />
                  </span>
                </td>
              </tr>
              <tr class="bg-white border-b">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  دوره ReactJS تا استخدام!
                </th>
                <td class="px-6 py-4">rad_front</td>
                <td dir="ltr" class="px-6 font-sans py-4">
                  1403-03-07| 16:24
                </td>
                <td class="px-6  py-4">
                  <span className="font-Dana-Bold text-base text-green-500 ">
                    4,800,000
                  </span>
                </td>
                <td class="px-6  py-4">
                  <span className="font-Dana-Medium text-xs px-3 py-1.5 rounded-md bg-red-500/10 text-red-500  ">
                    <Error />
                  </span>
                </td>
              </tr>
              <tr class="bg-white border-b">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  دوره مقدماتی تا پیشرفته جاوا اسکریپت
                </th>
                <td class="px-6 py-4">rad_front</td>
                <td dir="ltr" class="px-6 font-sans py-4">
                  1403-03-07| 16:24
                </td>
                <td class="px-6  py-4">
                  <span className="font-Dana-Bold text-base text-green-500 ">
                    رایگان
                  </span>
                </td>
                <td class="px-6  py-4">
                  <span className="font-Dana-Medium text-xs px-3 py-1.5 rounded-md bg-teal-500/10 text-teal-500  ">
                    <Check />
                  </span>
                </td>
              </tr>
              <tr class="bg-white border-b">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  دوره ReactJS تا استخدام!
                </th>
                <td class="px-6 py-4">rad_front</td>
                <td dir="ltr" class="px-6 font-sans py-4">
                  1403-03-07| 16:24
                </td>
                <td class="px-6  py-4">
                  <span className="font-Dana-Bold text-base text-green-500 ">
                    4,800,000
                  </span>
                </td>
                <td class="px-6  py-4">
                  <span className="font-Dana-Medium text-xs px-3 py-1.5 rounded-md bg-red-500/10 text-red-500  ">
                    <Error />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
