import React from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function Chart({ data }) {
  // Example data
  //   const data = [
  //     {
  //       name: "Line A",
  //       uv: 400,
  //       pv: 4890,
  //       amt: 2400,
  //     },
  //   ];

  const chartRender = (
    <ResponsiveContainer
      width={"100%"}
      height={500}
    >
      <AreaChart data={data}>
        <XAxis dataKey={"name"}/>
        <YAxis />
        <CartesianGrid stroke="#8884d8"/>
        <Tooltip className="bg-black dark:bg-black"/>
        <Area type={"monotone"} stroke="gray" dataKey={"count"} name="این ماه" fill="#4880FF"/>
        <Area type={"monotone"} stroke="gray" dataKey={"pv"} name="ماه اخیر" fill="#E1EAFC"/>
      </AreaChart>
    </ResponsiveContainer>
  );
  return chartRender;
}
