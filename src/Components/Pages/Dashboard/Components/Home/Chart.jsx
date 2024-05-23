import { ArrowCircleUp, ArrowUp3, Calendar2 } from "iconsax-react";
import React from "react";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

export default function Chart() {
  const data = [
    {
      name: "فروردین",
      value: 2500,
      prev: 1425,
    },
    {
      name: "اردیبهشت",
      value: 1200,
      prev: 1725,
    },
    {
      name: "خرداد",
      value: 3224,
      prev: 9421,
    },
    {
      name: "تیر",
      value: 746,
      prev: 1124,
    },
    {
      name: "مرداد",
      value: 5200,
      prev: 449,
    },
    {
      name: "شهریور",
      value: 4294,
      prev: 2359,
    },
    {
      name: "مهر",
      value: 9420,
      prev: 5790,
    },
    {
      name: "آبان",
      value: 12755,
      prev: 1264,
    },
    {
      name: "آذر",
      value: 1245,
      prev: 142,
    },
    {
      name: "دی",
      value: 8653,
      prev: 423,
    },
    {
      name: "بهمن",
      value: 4666,
      prev: 1264,
    },
    {
      name: "اسفند",
      value: 231,
      prev: 1264,
    },
  ];
  return (
    <div
      className={
        "lg:max-w-[540px] lg:min-w-[540px] p-6 h-[345px] bg-white rounded-2xl dark:bg-[#111C44]"
      }
    >
      <header>
        <span
          className="px-4 text-sm bg-[#F4F7FE] dark:bg-[#1B254B] text-[#A3AED0] select-none max-w-max py-1.5 rounded-lg flex items-center gap-1
            "
        >
          <Calendar2 className="w-5" />
          <span>ماه گذشته</span>
        </span>
      </header>
      <main className="mt-5">
        <div className="flex gap-1">
          <p className="font-Dana-Bold text-2xl">19,249,575</p>
          <span className="text-xs mt-2 text-slate-400">تومان</span>
        </div>
        <div className="text-xs flex text-slate-300 dark:text-slate-500 items-center gap-1">
          <span>نسبت به ماه گذشته</span>
          <span>
            <ArrowCircleUp variant="Bold" className="pb-1 text-green-500 w-4" />
          </span>
          <span className="font-Dana-Demi text-green-500 text-base">2.58%</span>
        </div>
        <ResponsiveContainer height={200} className={"w-full"}>
          <LineChart data={data}>
            <XAxis dataKey={"name"} />
  
            <Line
              type={"monotone"}
              dataKey={"value"}
              name="ماه جاری"
              stroke="#8884d8" fillOpacity={1}
            />
            <Line
              type={"monotone"}
              dataKey={"prev"}
              stroke="#82ca9d" fillOpacity={1} 
              name="ماه اخیر"
            />
            <Legend />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </main>
      <footer></footer>
    </div>
  );
}
