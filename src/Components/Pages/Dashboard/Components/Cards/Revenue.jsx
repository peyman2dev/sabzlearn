import { ArrowLeft } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";
import { BarChart, Tooltip,YAxis,Bar, Legend,CartesianGrid, ResponsiveContainer, XAxis } from "recharts";

export default function Revenue() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];
  return (
    <article className="w-full h-full rounded-2xl shadow p-10 bg-[#2b49fe] text-[#c1d2fe]">
      <div className="space-y-4 ">
        <div className="flex items-center gap-1">
          <p className="text-2xl font-Dana-Bold">18,294,000</p>
          <span>تومان</span>
        </div>
        <div>
          <Link className="flex text-sm items-center gap-1">
            <span>مشاهده کامل</span>
            <span>
              <ArrowLeft />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <ResponsiveContainer className={"w-full h-[500px]"}>
        <BarChart width={730} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="pv" fill="#8884d8" />
  <Bar dataKey="uv" fill="#82ca9d" />
</BarChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}
