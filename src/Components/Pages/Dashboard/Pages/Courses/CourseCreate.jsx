import React, { useState } from "react";
import TextEditor from "../../../../Reusable/TextEditor/TextEditor";

const CourseCreate = () => {
  const [body, setBody] = useState(null);
  return (
    <>
      <h1 className="text-2xl font-Dana-Demi ">داشبورد | ایجاد دوره</h1>
      <section className="mt-10 grid xl:grid-cols-2 child:-wfull gap-5 mb-10">
        <div>
          <p> عنوان محصول</p>
          <input
            type="text"
            className="h-10 w-full mt-2 dark:bg-dark-800 px-6 outline-none rounded-md"
          />
        </div>
        <div>
          <p> توضیحات محصول</p>
          <input
            type="text"
            className="h-10 w-full mt-2 dark:bg-dark-800 px-6 outline-none rounded-md"
          />
        </div>
        <div>
          <p> تصویر محصول</p>
          <input
            type="text"
            className="h-10 w-full mt-2 dark:bg-dark-800 px-6 outline-none rounded-md"
          />
        </div>
      </section>
      <TextEditor data={body} dataSet={setBody} />
    </>
  );
};

export default CourseCreate;
