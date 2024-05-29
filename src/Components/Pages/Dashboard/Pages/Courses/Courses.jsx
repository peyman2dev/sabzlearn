import React, { useContext, useEffect, useState } from "react";
import DashboardContext from "../../../../../Utils/Contexts/DashboardContext";
import Button from "../../../../Reusable/Buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { courseRemove } from "../../../../../Utils/Redux/actions/actions";
import { ToastContainer } from "react-toastify";
import Modal from "../../../../Reusable/Modal/Modal";
import { Link } from "react-router-dom";
import ModalHeader from "../../../../Reusable/Modal/ModalHeader";
import { Close } from "@mui/icons-material";
import ModalMain from "../../../../Reusable/Modal/ModalMain";
import ModalFooter from "../../../../Reusable/Modal/ModalFooter";

export default function Courses() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState(0);
  const [file, setFile] = useState({});
  const [isFree, setIsFree] = useState(1);
  const { courses } = useSelector((state) => state.server);
  const [target, setTarget] = useState({});
  const { routing } = useContext(DashboardContext);
  const [show, setShow] = useState(false);
  const [sessionShow, setSessionShow] = useState(false);

  useEffect(() => {
    routing.setRouteTitle("دوره ها");
  }, []);

  const courseRemoveHandler = () => {
    dispatch(courseRemove(target._id));
    setShow(false);
  };

  const sessionCreateAction = () => {
    const sessionData = {
      title,
      time: duration,
      video: file,
      free: isFree,
    };
  };

  return (
    <>
      <ToastContainer bodyClassName={"font-Dana-Regular"} />
      <div className="w-full flex items-center justify-between">
        <span className="text-2xl text-slate-950 font-Dana-Bold">
          مدیریت دوره ها
        </span>
        <Button variant="secondary" title="ایجاد دوره" />
      </div>
      <section className="mt-10">
        <div className="relative overflow-x-auto shadow-md sm:rounded-md">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
              <tr>
                <th scope="col" className="px-16 py-3">
                  <span className="sr-only">Image</span>
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
                <th scope="col" className="px-6 py-3">
                  مدیریت
                </th>
              </tr>
            </thead>
            <tbody>
              {_.map(courses, (course, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="p-4">
                    <img
                      src={course.cover}
                      className="w-16 md:w-32 max-w-full max-h-full"
                      alt="Apple Watch"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {course.name}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">{course.shortName}</div>
                  </td>
                  <td className="px-6 py-4 text-base font-semibold text-green-500">
                    {course.price > 1
                      ? course.price.toLocaleString()
                      : "رایگان"}
                  </td>
                  <td className="px-6 child:mx-0.5 py-4">
                    <button
                      onClick={() => {
                        setTarget(course);
                        setSessionShow(!sessionShow);
                      }}
                      className="font-medium px-4 py-1.5 rounded-md bg-opacity-5 bg-sky-500 text-sky-600  duration-150 hover:bg-opacity-15"
                    >
                      ایجاد جلسه
                    </button>
                    <button
                      onClick={() => {
                        setTarget(course);
                        setShow(!show);
                      }}
                      className="font-medium px-4 py-1.5 rounded-md bg-opacity-5 bg-red-500 text-red-600  duration-150 hover:bg-opacity-15"
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Modal
        size="large"
        modalShow={{
          setShow: setSessionShow,
          show: sessionShow,
        }}
      >
        <ModalHeader style={""}>
          <p className="font-Dana-Bold text-lg tracking-tight">ایجاد جلسه</p>
          <button
            className="text-zinc-400"
            onClick={() => setSessionShow(false)}
          >
            <Close />
          </button>
        </ModalHeader>
        <ModalMain style={""}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="sessionName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                عنوان جلسه
              </label>
              <input
                type="text"
                id="sessionName"
                onChange={(event) => setTitle(event.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="آرایه ها + معرفی پروژه مدیریت کاربران"
                required
              />
            </div>
            <div>
              <label
                htmlFor="videoDuration"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                مدت زمان ویدیو
              </label>
              <input
                type="text"
                id="videoDuration"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="14:24"
                onChange={(event) => setDuration(event.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                درسترسی
              </label>

              <label className="inline-flex select-none items-center cursor-pointer">
                <input
                  onChange={(event) =>
                    setIsFree(event.target.checked == true ? 1 : 0)
                  }
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 ">
                  جلسه رایگان
                </span>
              </label>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 "
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    MP4, MKV, or MOV (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  onChange={(event) => setFile(event.target.files[0])}
                  accept=".mp4 , .mkv,"
                  type="file"
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </ModalMain>
        <ModalFooter>
          <Button action={() => {}} variant="light" title="ایجاد جلسه" />
        </ModalFooter>
      </Modal>
    </>
  );
}
