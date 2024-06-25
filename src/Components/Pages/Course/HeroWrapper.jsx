import React, { useContext } from "react";
import CourseContext from "../../../Utils/Contexts/CourseContext";
import { SchoolOutlined } from "@mui/icons-material";

const HeroWrapper = () => {
  const { course } = useContext(CourseContext);

  return (
    <section className="my-10 container flex items-center lg:flex-row lg:child:w-1/2 flex-col-reverse gap-4 justify-between">
      <div className="w-full flex flex-col h-[376px] justify-between">
        <div>
          <h1 className="font-Dana-Demi text-[1.375rem] mb-[19px]">
            {course.name}
          </h1>
          <p
            className="sm:text-lg line-clamp-4  sm:line-clamp-3"
            dangerouslySetInnerHTML={{ __html: course.description }}
          ></p>
        </div>
        <div className="flex items-center  justify-between">
          {course.isUserRegisteredToThisCourse ? (
            <div></div>
          ) : (
            <div className="px-4 py-2.5 rounded-md flex items-center gap-1.5 duration-150 hover:bg-opacity-70 cursor-pointer active-animation select-none bg-green-600 text-white max-w-max">
              <SchoolOutlined />
              ثبت نام در دوره
            </div>
          )}
          <div>
            {course.price ? (
              <span className="text-lg flex items-center gap-0.5 font-Dana-Demi">
                {course.price.toLocaleString("fa-IR")}
                <span>ت</span>
              </span>
            ) : (
              "رایگان !"
            )}
          </div>
        </div>
      </div>
      <div>
        <img
          src={`/backend/public/courses/covers/${course.cover}`}
          alt={course.name}
          className="w-full rounded-lg lg:h-[376px]"
        />
      </div>
    </section>
  );
};

export default HeroWrapper;
