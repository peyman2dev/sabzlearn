import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import DashboardContext from "../../../../../Utils/Contexts/Dashboard/DashboardContext";
import CoursesContext from "../../../../../Utils/Contexts/Dashboard/CoursesContext";

export default function CoursesList() {
    const context = useContext(CoursesContext)
  const { courses } = useSelector((state) => state.server);
  //   const { dataSet, sessionShow, setSessionShow, setTarget, target } =


  return (
    <section className="mt-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs  text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                تصویر
              </th>
              <th scope="col" className="px-6 py-3">
                نام دوره
              </th>
              <th scope="col" className="px-6 py-3">
                نام کوتاه
              </th>

              <th scope="col" className="px-6 py-3">
                قیمت
              </th>
              <th scope="col" className="px-6 text-center py-3">
                مدیریت
              </th>
            </tr>
          </thead>
          <tbody>
            {_.map(courses, (course, index) => (
              <tr
                key={index}
                className="bg-white overflow-x-auto border-b  h-[115px] w-full hover:bg-gray-50"
              >
                <td className="p-4">
                  <img
                    src={course.cover}
                    className="min-w-24 md:w-32 rounded-md max-w-full max-h-full"
                    alt="Apple Watch"
                  />
                </td>
                <td className="px-6 min-w-max py-4 font-semibold text-gray-900">
                  {course.name}
                </td>
                <td className="px-6 py-4 min-w-max">
                  <div className="flex items-center">{course.shortName}</div>
                </td>
                <td className="px-6 py-4 text-base font-semibold text-green-500">
                  {course.price > 1 ? course.price.toLocaleString() : "رایگان"}
                </td>
                <td className="px-6 child:min-w-max flex h-[115px] items-center  justify-center mx-auto child:mx-0.5 py-4">
                  <button
                    onClick={() => {
                      context.session.setSessionShow(!context.session.sessionShow)
                      context.setTarget(course)
                      context.session.setSessionTab("CREATE_SESSION")
                      }}
                    className="font-medium px-4 py-1.5 rounded-md bg-opacity-5 bg-sky-500 text-sky-600  duration-150 hover:bg-opacity-15"
                  >
                    مدیریت جلسات
                  </button>
                  <button
                    onClick={() => {
                      //   setShow(!show);
                    }}
                    className="font-medium px-4 py-1.5 rounded-md bg-opacity-5 bg-red-500 text-red-600  duration-150 hover:bg-opacity-15"
                  >
                    حذف دوره
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
