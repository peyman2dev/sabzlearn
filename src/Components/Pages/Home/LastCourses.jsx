import React from "react";
import Title from "../../Reusable/Title/Title";
import { useSelector } from "react-redux";
import _ from "lodash";
import Product from "../../Reusable/Cards/Product/Product";
import Circle from "../../Reusable/Cards/Product/Circle";
import useCourses from "../../../Utils/Hooks/ApiHooks/useCourses";

export default function LastCourses() {
  const {data:courses, isLoading, isFetching} = useCourses()
  return (
    <section className="container w-[95%] mx-auto sm:w-full my-[100px]">
      <Title color={"bg-yellow-500"} title={"آخرین دوره های سبزلرن"}
      desc={"سکوی پرتاپ شما به سمت موفقیت"}
      urlTitle={"مشاهده دوره ها"}
      url={"/courses/"}
       />
       <main className="grid relative z-[1] xl:grid-cols-4 gap-5 sm:grid-cols-2 grid-cols-1 mt-20 md:grid-cols-3">
        {
            _.map(courses, (course, index) => (
                <Product {...course} key={index} />
            ))
        }
       </main>
       <Circle classes={"bg-yellow-500 top-0"}/>
    </section>
  );
}
