import React, { useState, useContext, useEffect } from "react";
import Modal from "../../../../Reusable/Modal/Modal";
import ModalHeader from "../../../../Reusable/Modal/ModalHeader";
import ModalMain from "../../../../Reusable/Modal/ModalMain";
import ModalFooter from "../../../../Reusable/Modal/ModalFooter";
import { Close } from "@mui/icons-material";
import Button from "../../../../Reusable/Buttons/Button";
import { createSession } from "../../../../../Utils/Redux/actions/actions";
import { useDispatch } from "react-redux";
import CoursesContext from "../../../../../Utils/Contexts/Dashboard/CoursesContext";
import { ToastContainer } from "react-toastify";

export default function Sessions() {

    const dispatch = useDispatch()
  const context = useContext(CoursesContext);
  const [data, setData] = useState({
    title: "",
    time: "",
    isFree: 1,
    file: {},
  });


  const sessionCreateAction = () => {
    let formData = new FormData();
    formData.append("title", data.title);
    formData.append("time", data.time);
    formData.append("video", data.file);
    formData.append("free", data.isFree);
    context.session.setSessionShow(false);
    dispatch(createSession({ data: formData, productID: context.target._id }));
  };

  return (
    <>
    <ToastContainer 
    bodyClassName={"font-Dana-Regular"}
    />
    <Modal
      size="large"
      modalShow={{
        setShow: context.session.setSessionShow,
        show: context.session.sessionShow,
      }}
    >
      <ModalHeader style={""}>
        <p className="font-Dana-Bold text-lg tracking-tight">مدیریت جلسات</p>
        <button className="text-zinc-400" onClick={() => context.session.setSessionShow(false)}>
          <Close />
        </button>
      </ModalHeader>
      <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
        <ul class="flex flex-wrap -mb-px">
          <li class="me-2">
            <button
              onClick={() => context.session.setSessionTab("SESSIONS_LIST")}
              class={`inline-block p-4 ${
                context.session.sessionTab !== "CREATE_SESSION"
                  ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active"
                  : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              } `}
            >
              مشاهده جلسات
            </button>
          </li>
          <li class="me-2">
            <button
              onClick={() => context.session.setSessionTab("CREATE_SESSION")}
              class={`inline-block p-4 ${
                context.session.sessionTab === "CREATE_SESSION"
                  ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active"
                  : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              } `}
              aria-current="page"
            >
              ایجاد جلسه
            </button>
          </li>
        </ul>
      </div>
      {context.session.sessionTab === "CREATE_SESSION" ? (
        <>
          <ModalMain style={"border-t-transparent"}>
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
                  onChange={(event) =>
                    setData((prev) => ({
                      ...prev,
                      title: event.target.value,
                    }))
                  }
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
                  onChange={(event) =>
                    setData((prev) => ({
                      ...prev,
                      time: event.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                    دسترسی
                </label>

                <label className="inline-flex select-none items-center cursor-pointer">
                  <input
                         onChange={(event) =>
                            setData((prev) => ({
                              ...prev,
                              isFree: event.target.checked ? 1 : 0
                            }))
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
                    onChange={(event) =>
                        setData((prev) => ({
                          ...prev,
                          file: event.target.files[0],
                        }))
                      }
                    accept=".mp4 , .mkv,"
                    type="file"
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </ModalMain>
          <ModalFooter>
            <Button
              action={() => sessionCreateAction()}
              variant="light"
              title="ایجاد جلسه"
            />
          </ModalFooter>
        </>
      ) : (
        ""
      )}
    </Modal>
    </>
  );
}
