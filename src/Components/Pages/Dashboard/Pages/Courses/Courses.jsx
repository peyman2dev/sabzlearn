import React, { useContext, useEffect, useState } from "react";
import DashboardContext from "../../../../../Utils/Contexts/Dashboard/DashboardContext";
import Button from "../../../../Reusable/Buttons/Button";
import { useDispatch } from "react-redux";
import _ from "lodash";
import {
  courseRemove,
  createSession,
} from "../../../../../Utils/Redux/actions/actions";
import { ToastContainer } from "react-toastify";
import Modal from "../../../../Reusable/Modal/Modal";
import { Link } from "react-router-dom";
import ModalHeader from "../../../../Reusable/Modal/ModalHeader";
import { Close } from "@mui/icons-material";
import ModalMain from "../../../../Reusable/Modal/ModalMain";
import ModalFooter from "../../../../Reusable/Modal/ModalFooter";
import CoursesList from "./CoursesList";
import CoursesContext from "../../../../../Utils/Contexts/Dashboard/CoursesContext";
import Sessions from "../Sessions/Sessions";

export default function Courses() {
  const { routing, setCoursesContext } = useContext(DashboardContext);
  const dispatch = useDispatch();

  const [sessionTab, setSessionTab] = useState(null);
  const [target, setTarget] = useState({});
  const [show, setShow] = useState(false);
  const [sessionShow, setSessionShow] = useState(false);
  const { Provider } = CoursesContext;

  useEffect(() => {
    routing.setRouteTitle("دوره ها");
  }, []);

  // const courseRemoveHandler = () => {
  //   dispatch(courseRemove(target._id));
  //   setShow(false);
  // };


  return (
    <Provider
      value={{
        session: {
          sessionTab,
          setSessionTab,
          sessionShow,
          setSessionShow,
        },
        target,
        setTarget,
      }}
    >
      <ToastContainer bodyClassName={"font-Dana-Regular"} />
      {/* Header */}
      <div className="w-full flex items-center justify-between">
        <span className="text-2xl text-slate-950 font-Dana-Bold">
          مدیریت دوره ها
        </span>
        <Button variant="secondary" title="ایجاد دوره" />
      </div>

      {/* Table */}
      <CoursesList />

      <Sessions />
    </Provider>
  );
}
