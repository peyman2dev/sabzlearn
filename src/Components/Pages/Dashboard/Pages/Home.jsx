import React from "react";
import DataCard from "../Components/Cards/DataCard";
import _, { identity } from "lodash";
import {
  Book1,
  Chart1,
  Folder2,
  MoneyRemove,
  Profile2User,
} from "iconsax-react";
import { useSelector } from "react-redux";
import Chart from "../Components/Home/Chart";
import LastUsers from "../Components/Home/LastUsers";
import LastCourses from "../Components/Home/LastCourses";
import OnlineUsers from "../Components/Home/OnlineUsers";
import LastArticle from "../Components/Home/LastArticle";
import SecurityCard from "../Components/Cards/SecurityCard";
import LatestEvent from "../Components/Home/LatestEvent";

export default function Home() {
  const courses = useSelector((state) => state.server.courses);
  const users = useSelector((state) => state.server.users);
  const articles = useSelector((state) => state.server.articles);
  const datas = [
    {
      id: crypto.randomUUID(),
      title: "درآمد",
      value: 18950293,
      icon: <Chart1 variant="Bulk" />,
    },
    {
      id: crypto.randomUUID(),
      title: "تعداد کاربران",
      value: users.length,
      icon: <Profile2User variant="Bulk" />,
    },
    {
      id: crypto.randomUUID(),
      title: "مرجوع شده",
      value: 249000,
      icon: <MoneyRemove variant="Bulk" />,
    },
    {
      id: crypto.randomUUID(),
      title: "تعداد دوره ها",
      value: courses.length,
      icon: <Folder2 variant="Bulk" />,
    },
    {
      id: crypto.randomUUID(),
      title: "تعداد مقاله ها",
      value: articles.length,
      icon: <Book1 />,
    },
  ];

  return (
    <section className="flex flex-col">
      <section className="flex items-center my-4 flex-wrap gap-3">
        {_.map(datas, (data) => (
          <DataCard key={data.id} {...data} />
        ))}
      </section>
      <section className="my-10 grid xl:grid-cols-2 gap-5 ">
        <Chart />
        <LastUsers />
      </section>
      <section className="my-10">
        <LastCourses />
        <section className="mt-20 ">
        <h4 className="text-2xl font-Dana-Bold">
          دسترسی سریع
        </h4>
          <div className="grid mt-10 child:h-[345px] xl:grid-cols-4 gap-5 md:grid-cols-3 lg:grid-cols-2  sm:grid-cols-2 ">
            <OnlineUsers />
            <LastArticle />
            <SecurityCard />
            <LatestEvent />
          </div>
        </section>
      </section>
    </section>
  );
}
