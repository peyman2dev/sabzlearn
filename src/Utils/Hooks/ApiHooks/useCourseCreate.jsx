import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import api from "../../Api/api";
import toast from "../../../Components/Reusable/Toast/Toast";
import { useNavigate } from "react-router-dom";

const useCourseCreate = () => {
    const navigator = useNavigate()
    const client = useQueryClient()
  const courseCreator = (course) => {
    return api
      .post("/courses", course, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((r) => r.data)
      .then((data) => data);
  };
  return useMutation({
    mutationKey: ["courses"],
    mutationFn: courseCreator,
    onSuccess: () => {
        toast.success("دوره با موفقیت ایجاد گردید :)", () => {
            navigator('/dashboard/courses')
        }, 600)
        return client.invalidateQueries({
            queryKey: ["courses"]
        })
    }
  });
};

export default useCourseCreate;
