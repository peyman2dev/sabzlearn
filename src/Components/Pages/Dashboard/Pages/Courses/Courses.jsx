import React, { useContext, useEffect, useState } from "react";
import DashboardContext from "../../../../../Utils/Contexts/DashboardContext";
import Button from "../../../../Reusable/Buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { Close } from "@mui/icons-material";
import { InfoCircle } from "iconsax-react";
import { courseRemove } from "../../../../../Utils/Redux/actions/actions";
import { ToastContainer } from "react-toastify";
import Modal from "../../../../Reusable/Modal/Modal";
import ModalHeader from "../../../../Reusable/Modal/ModalHeader";
import ModalMain from "../../../../Reusable/Modal/ModalMain";
import ModalFooter from "../../../../Reusable/Modal/ModalFooter";
import { Link } from "react-router-dom";

export default function Courses() {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.server);
  const [target, setTarget] = useState({});
  const { routing } = useContext(DashboardContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    routing.setRouteTitle("دوره ها");
  }, []);

  const courseRemoveHandler = () => {
    dispatch(courseRemove(target._id));
    setShow(false);
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
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
              <tr>
                <th scope="col" class="px-16 py-3">
                  <span class="sr-only">Image</span>
                </th>
                <th scope="col" class="px-6 py-3">
                  نام دوره
                </th>
                <th scope="col" class="px-6 py-3">
                  نام کوتاه
                </th>
                <th scope="col" class="px-6 py-3">
                  قیمت
                </th>
                <th scope="col" class="px-6 py-3">
                  مدیریت
                </th>
              </tr>
            </thead>
            <tbody>
              {_.map(courses, (course, index) => (
                <tr class="bg-white border-b hover:bg-gray-50">
                  <td class="p-4">
                    <img
                      src={course.cover}
                      class="w-16 md:w-32 max-w-full max-h-full"
                      alt="Apple Watch"
                    />
                  </td>
                  <td class="px-6 py-4 font-semibold text-gray-900">
                    {course.name}
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center">{course.shortName}</div>
                  </td>
                  <td class="px-6 py-4 text-base font-semibold text-green-500">
                    {course.price > 1
                      ? course.price.toLocaleString()
                      : "رایگان"}
                  </td>
                  <td class="px-6 child:mx-0.5 py-4">
                    <button
                      onClick={() => {}}
                      class="font-medium px-4 py-1.5 rounded-md bg-opacity-5 bg-sky-500 text-sky-600  duration-150 hover:bg-opacity-15"
                    >
                      ایجاد جلسه
                    </button>
                    <button
                      onClick={() => {
                        setTarget(course);
                        setShow(!show);
                      }}
                      class="font-medium px-4 py-1.5 rounded-md bg-opacity-5 bg-red-500 text-red-600  duration-150 hover:bg-opacity-15"
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

      {show && (
        <Modal show={show} setShow={setShow}>
          <ModalHeader title={"حذف دوره"} action={() => setShow(false)} />
          <ModalMain
            type="info"
            message={
              <>
                آیا از حذف دوره{" "}
                <Link
                  to={`/course/${target.shortName}`}
                  className="font-Dana-Medium text-slate-700 "
                >
                  {target.name}
                </Link>
                مطمئن هستید؟
              </>
            }
          />
          <ModalFooter>
            <Button
              action={() => setShow(false)}
              title="انصراف"
              variant="light"
            />
            <Button action={() => courseRemoveHandler()} title="حذف دوره" variant="danger" />
          </ModalFooter>
        </Modal>
      )}
    </>
  );
}
