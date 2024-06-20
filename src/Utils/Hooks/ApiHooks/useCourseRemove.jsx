import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../Api/api";
import { useDispatch } from "react-redux";
import toast from "../../../Components/Reusable/Toast/Toast";

const useCourseRemove = () => {
  const queryClient = useQueryClient();

  const courseRemove = (courseID) => {
    return api
      .delete(`/courses/${courseID}`)
      .then((r) => r.data)
      .then((d) => d);
  };

  return useMutation({
    mutationFn: courseRemove,
    onSuccess: () => {
      toast.success("دوره با موفقیت حذف گردید !", () => {});
      return queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
    },
  });
};

export default useCourseRemove;
