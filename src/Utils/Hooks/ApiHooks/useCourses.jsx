import { useQuery } from "@tanstack/react-query";
import React from "react";
import api from "../../Api/api";

const fetchCourses = () =>
  api
    .get("/courses")
    .then((r) => r.data)
    .then((d) => d);

const useCourses = () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses
  });
};

export default useCourses;
