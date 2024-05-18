import React from "react";
import Title from "../../Reusable/Title/Title";

export default function LastCourses() {
  return (
    <section className="container w-[95%] mx-auto sm:w-full my-[100px]">
      <Title color={"bg-yellow-500"} title={"آخرین دوره های سبزلرن"}
      desc={"سکوی پرتاپ شما به سمت موفقیت"}
      urlTitle={"مشاهده دوره ها"}
      url={"/courses/"}
       />
       <main></main>
    </section>
  );
}
