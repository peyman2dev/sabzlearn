import React from "react";
import Product from "../Cards/Product";
import _ from "lodash";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowLeft2 } from "iconsax-react";

export default function LastCourses() {
  const courses = useSelector((state) => state.server.courses);
  return (
    <>
    <div className="w-full  flex items-center justify-between">
        <h4 className="text-2xl font-Dana-Bold">
            آخرین دوره ها
        </h4>
        <Link className="px-5 py-2.5 rounded-lg bg-slate-500/15 flex items-center gap-2" to={'courses'}>
        مدیریت
        <ArrowLeft2 className="w-4"/>
        </Link>
    </div>
    <section className="grid xl:grid-cols-4 lg:grid-cols-3 gap-5 mt-10 sm:grid-cols-2 grid-cols-1">
      {_.slice(courses, 0, 4).map((course, index) => (
        <Product editable={false} course={course} key={index} />
      ))}
    </section>
    </>
  );
}
