import React, { useContext, useEffect } from "react";
import Card from "../Components/Cards/Card";
import Transactions from "../Components/Cards/Transactions";
import Revenue from "../Components/Cards/Revenue";
import {
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Radar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import DashboardContext from "../../../../Utils/Contexts/DashboardContext";

export default function Home() {
  const {routing} = useContext(DashboardContext)
  const radarData = [
    {
      subject: "ثبت نام",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "بازدید",
      A: 198,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "سفارشات",
      A: 219,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "تیکت ها",
      A: 129,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "مرجوع شده",
      A: 15,
      B: 90,
      fullMark: 150,
    },
    {
      subject: "لیست بن",
      A: 85,
      B: 85,
      fullMark: 150,
    },
  ];
  const uniqueViewers = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  useEffect(() => {
    routing.setRouteTitle("داشبورد")
  }, [])
  return (
    <>
      <div className="cards-container border rounded-3xl divide-x grid xl:grid-cols-4">
        <Card
          title="فروش این ماه"
          value="24,429,964"
          caption="21% بیشتر نسبت به ماه گذشته"
          type="information"
        />
        <Card
          title="فروش این ماه"
          value="24,429,964"
          caption="21% بیشتر نسبت به ماه گذشته"
          type="information"
        />
        <Card
          title="فروش این ماه"
          value="24,429,964"
          caption="21% بیشتر نسبت به ماه گذشته"
          type="information"
        />
        <Card
          title="فروش این ماه"
          value="24,429,964"
          caption="21% بیشتر نسبت به ماه گذشته"
          type="information"
        />
      </div>
      <section className="grid my-10 lg:grid-cols-2 gap-5 items-center ">
        <Transactions />
        <Revenue />
      </section>
      <section className="my-10 child:w-full child:bg-white child:rounded-2xl child:shadow lg:grid grid-cols-3 gap-10">
        <div>
          <div className="p-6">
            <p className="font-Dana-Medium">فعالیت های اخیر</p>
          </div>
          <div className="p-3 flex items-center justify-center w-full">
            <RadarChart
              outerRadius={90}
              data={radarData}
              width={320}
              height={300}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
              <Tooltip />
              <Radar
                name="ماه جاری"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Radar
                name="ماه گذشته"
                dataKey="B"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </div>
        </div>
        <div>
          <div className="p-6">
            <p className="font-Dana-Medium">خرید های این ماه</p>
          </div>
          <ResponsiveContainer height={290} width={"95%"}>
            <AreaChart
              height={250}
              data={uniqueViewers}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
  
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div>
          <div className="p-6">
            <p className="font-Dana-Medium">فعالیت های اخیر</p>
          </div>
          <ResponsiveContainer height={290} width={"95%"}>
            <AreaChart
              height={250}
              data={uniqueViewers}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
  
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>
    </>
  );
}
