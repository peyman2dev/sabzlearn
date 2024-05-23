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
    <>
      <section className="flex items-center gap-3">
        {_.map(datas, (data) => (
          <DataCard key={data.id} {...data} />
        ))}
      </section>
      <section className="my-10 flex gap-5">
        <Chart />
        <LastUsers />
      </section>
      <section className="my-10">
        <LastCourses />

        <section className="my-10">
        <OnlineUsers />
        </section>
      </section>
    </>
  );
}
