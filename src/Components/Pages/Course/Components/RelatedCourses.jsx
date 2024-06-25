import React, { useEffect, useState } from "react";
import useCourses from "../../../../Utils/Hooks/ApiHooks/useCourses";
import { AutoAwesome } from "@mui/icons-material";
import _ from "lodash";
import Loading from "../../../Reusable/Loading/Loading";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft2 } from "iconsax-react";
const RelatedCourses = ({ currentCourse,keywords }) => {

  const [relates, setRelates] = useState([]);
  const { courseName } = useParams();
  const { data: courses, isLoading, isError, isFetching } = useCourses();


  useEffect(() => {
    if (courses?.length && !isLoading && !isError && !isFetching) {
      const filteredCourses = courses.filter(
        (course) =>
          course.description && currentCourse !== course.shortName &&
          keywords.some((keyword) => course.description.includes(keyword))
      );
      setRelates(filteredCourses);
    }
  }, [courses, isLoading, isError, isFetching, keywords]);

  if (isLoading && isFetching) {
    return <Loading />;
  }
  return (
    <section className="relative w-full dark:bg-dark-800 rounded-lg bg-white child:p-4 pb-10">
      <div className="gap-1.5 px-[12px!important] flex relative before:absolute before:h-3/4  before:w-2 before:-right-2 before:rounded-r-md  before:bg-sky-400  items-center">
        <span className="text-sky-400">
          <AutoAwesome variant="Bold" className="w-8 h-8" />
        </span>
        <h4 className="font-Dana-Bold text-lg">دوره های مشابه</h4>
      </div>
      <div className="mt-5 space-y-3 w-full">
        {relates?.length
          ? _.slice(relates, 0, 5).map((course) => (
              <article className="py-2 px-3 dark:bg-dark-800 bg-gray-100 rounded-md flex items-center justify-between w-full">
                <Link to={`/course/${course.shortName}`} className="flex items-center gap-3">
                  <img
                    src={`/backend/public/courses/covers/${course.cover}`}
                    alt={course.name}
                    className="w-28 rounded-md"
                  />
                  <span>
                    {course.name}
                  </span>
                </Link>
                <Link className="flex items-center text-sm font-Dana-Bold text-sky-500" to={`/course/${course.shortName}`}>
                <span>
                    مشاهده
                </span>
            <span>
                <ArrowLeft2  className="w-4 h-4"/>
            </span>
                </Link>
              </article>
            ))
          : "دوره ای پیدا نشد .."}
      </div>
    </section>
  );
};

export default RelatedCourses;
