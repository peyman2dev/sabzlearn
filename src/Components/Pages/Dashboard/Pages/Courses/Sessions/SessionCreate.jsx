import React, { useState } from "react";
import useSelectbox from "../../../../../../Utils/Hooks/useSelectbox";
import Selectbox from "../../../../../Reusable/Dropdowns/Selectbox";
import FileUplad from "../../../../../Reusable/Cards/Product/FileUplad";
import Button from "../../../../../Reusable/Buttons/Button";
import { useMutation } from "@tanstack/react-query";
import toast from "../../../../../Reusable/Toast/Toast";
import api from "../../../../../../Utils/Api/api";

const sendRequest = ({ session, courseID }) => {
  return api
  .post(`/courses/${courseID}/sessions`, session, {
    headers: {
      "Accept": "formData",
      "Content-Type": "multipart/form-data",
      
    },
  })
  .then((r) => r.data)
  .then((data) => data);
};

const SessionCreate = ({ courseID, switchTabTo }) => {
  const [target, setTarget] = useState(null);
  const [file, setFile] = useState({});
  const [sessionInfos, setSessionInfos] = useState({
    title: "",
    time: 0,
    free: 0,
  });
  const { quickSelect } = useSelectbox();
  const { mutateAsync: sendCreateReqToBackend } = useMutation({
    mutationKey: ["sessions"],
    mutationFn: sendRequest,
  });

  const opts = [
    {
      id: crypto.randomUUID(),
      title: "جلسه رایگان",
      value: 1,
      fn: (income) => {
        setTarget(income);
      },
    },
    {
      id: crypto.randomUUID(),
      title: "جلسه نقدی",
      value: 0,
      fn: (income) => {
        setTarget(income);
      },
    },
  ];

  const createNewSession = () => {
    const formData = new FormData();
    formData.append("title", sessionInfos.title);
    formData.append("time", sessionInfos.time);
    formData.append("free", target.value);
    formData.append("video", file);
    console.log(file)

    console.log(sessionInfos)

    sendCreateReqToBackend(
      { session: formData, courseID },
      {
        onError: err => {
          toast.error("عملیات با خطا مواجه شد", () => {});
        },
        onSuccess: (d) => {
          console.log(d);
          toast.success("جلسه با موفقیت ایجاد گردید", () => {});
          switchTabTo();
        },
      }
    );
  };

  return (
    <div className="w-full">
      <div className="grid w-full grid-cols-3 gap-5">
        <div>
          <label
            className="text-sm block dark:text-white/50"
            htmlFor="session-title"
          >
            عنوان جلسه
          </label>
          <input
            className="w-full mt-2 h-10 rounded-md outline-none text-sm border dark:border-white/10 px-6"
            placeholder="لطفا عنوان جلسه را وارد نمائید .."
            type="text"
            onChange={(e) =>
              setSessionInfos((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
          />
        </div>
        <div>
          <label
            className="text-sm block dark:text-white/50"
            htmlFor="session-title"
          >
            مدت زمان جلسه
          </label>
          <input
            className="w-full mt-2 h-10 rounded-md outline-none text-sm border dark:border-white/10 px-6"
            placeholder="لطفا مدت زمان جلسه را وارد نمائید: 12:42"
            type="number"
            onChange={(e) =>
              setSessionInfos((prev) => ({
                ...prev,
                time: e.target.value,
              }))
            }
          />
        </div>
        <div>
          <span className="text-sm block dark:text-white/50">وضعیت اشتراک</span>
          <Selectbox
            items={opts}
            selected={target}
            selector={quickSelect}
            className={
              "w-full dark:bg-dark-900 h-10 mt-2 rounded-md border dark:border-white/10"
            }
          />
        </div>
      </div>
      <div className="mb-4">
        <FileUplad
          className="mt-10"
          acceptable={".mp4, .mkv, .mov"}
          file={file}
          fileSaveTo={setFile}
        />
      </div>
      <div className="flex items-center justify-end">
        <Button fn={createNewSession} variant="success" size="small">
          ایجاد جلسه
        </Button>
      </div>
    </div>
  );
};

export default SessionCreate;
