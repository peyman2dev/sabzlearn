import React, { useContext } from "react";
import CourseContext from "../../../Utils/Contexts/CourseContext";
import HeroWrapper from "./HeroWrapper";
import Description from "./Deps/Description";
import InfoCard from "./Cards/InfoCard";
import Sidebar from "./Components/Sidebar";
import {
  Calendar,
  Clock,
  InfoCircle,
  Profile2User,
  Story,
  VideoPlay,
} from "iconsax-react";
import RelatedCourses from "./Components/RelatedCourses";
import Sessions from "./Components/Sessions";
import Circle from "../../Reusable/Cards/Product/Circle";

const CourseMain = () => {
  const { course } = useContext(CourseContext);

  let infos = [
    {
      id: crypto.randomUUID(),
      icon: <InfoCircle className="w-12 h-12 " />,
      propKey: "وضعیت دوره",
      value: course?.status == "start" ? "آغاز شده" : "پیش فروش",
    },
    {
      id: crypto.randomUUID(),
      icon: <Clock className="w-12 h-12 " />,
      propKey: "مدت زمان دوره",
      value: "6 ساعت",
    },
    {
      id: crypto.randomUUID(),
      icon: <Calendar className="w-12 h-12 " />,
      propKey: "آخرین بروزرسانی",
      value: String(course?.updatedAt).slice(0, 10).toLocaleString("fa-IR"),
    },
    {
      id: crypto.randomUUID(),
      icon: <Profile2User className="w-12 h-12 " />,
      propKey: "روش پشتیبانی",
      value: "آنلاین",
    },
    {
      id: crypto.randomUUID(),
      icon: <Story className="w-12 h-12 " />,
      propKey: "پیش نیازها",
      value: "JavaScript",
    },
    {
      id: crypto.randomUUID(),
      icon: <VideoPlay className="w-12 h-12 " />,
      propKey: "نوع مشاهده",
      value: "آنلاین",
    },
  ];

  const keywords = [
    "جاوا اسکریپت",
    "JavaScript",
    "جاوااسکریپت",
    "ReactJS",
    "React JS",
    "ری اکت",
    "Vue",
    "Angular",
  ];

  return (
    <main className="mb-20 relative">
      <Circle classes={"bg-sky-600 bg-opacity-10"} />
      <HeroWrapper />
      <section className=" child:space-y-4 container grid grid-cols-12 gap-6 sm:gap-7 mt-7 lg:mt-20">
        <section className="col-span-12 relative lg:col-span-8">
          <section className="grid  relative z-10 xl:grid-cols-3 gap-4">
            {infos.map((info) => (
              <InfoCard {...info} key={info.id} />
            ))}
          </section>
          <Description desc={course.description} />
          <Sessions />
          <Circle classes={"bg-teal-600  bg-opacity-15"} />
          <RelatedCourses
            currentCourse={course.shortName}
            keywords={keywords}
          />
        </section>
        <Sidebar />
      </section>
    </main>
  );
};

export default CourseMain;
