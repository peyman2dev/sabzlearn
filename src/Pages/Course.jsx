import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCourses from "../Utils/Hooks/ApiHooks/useCourses";
import CourseContext from "../Utils/Contexts/CourseContext";
import Header from "../Components/Reusable/Header/Header";
import CourseMain from "../Components/Pages/Course/CourseMain";
import Loading from "../Components/Reusable/Loading/Loading";
import { useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import api from "../Utils/Api/api";
import Footer from "../Components/Reusable/Footer/Footer";

const Course = () => {
  const { courseName } = useParams();
  const [course, setCourse] = useState({})

  const queryClient = useQueryClient()

  const getCourse = () => {
    return api
      .get(`courses/${courseName}`)
      .then((r) => r.data)
      .then((d) => {
        console.log(d);
        return d;
      });
  };

  const {
    mutate: courseFetch,
    isLoading,
    isFetching,
    
  } = useMutation({
    mutationKey: ['course'],
    mutationFn: getCourse,
    onSuccess: () => {
      console.log('Course Updated')
    }
  })

  const { Provider } = CourseContext;

  useEffect(() => {
    courseFetch(null, {
      onSuccess: data=> {
        setCourse(data)
      }
    })
  }, [courseName])
  

  useEffect(() => {
    if (!isLoading && !isFetching) {
      console.log(course);
    }
  }, []);
  if (isLoading && isFetching) {
    return <Loading />;
  }
  return (
      <Provider
        value={{
          course: course,
        }}
      >
        <Header />
        <CourseMain />
        <Footer />
      </Provider>
  );
};

export default Course;
