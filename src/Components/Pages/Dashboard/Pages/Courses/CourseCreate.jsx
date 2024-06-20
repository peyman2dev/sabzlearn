import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TextEditor from "../../../../Reusable/TextEditor/TextEditor";
import Button from "../../../../Reusable/Buttons/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { courseUploadSchema } from "../../../../../Utils/Validations/validations";
import Error from "../../../../Reusable/Messages/Error";
import useSelectbox from "../../../../../Utils/Hooks/useSelectbox";
import Selectbox from "../../../../Reusable/Dropdowns/Selectbox";
import { useSelector } from "react-redux";
import FileUplad from "../../../../Reusable/Cards/Product/FileUplad";
import { ToastContainer } from "react-toastify";
import useCourseCreate from "../../../../../Utils/Hooks/ApiHooks/useCourseCreate";

const CourseCreate = () => {
  const { categories } = useSelector((state) => state.server);
  const { mutate: newCourse } = useCourseCreate();
  const [options, setOptions] = useState([]);
  const [file, setFile] = useState(null);
  const { onOpen, quickSelect, open } = useSelectbox();
  const [category, setCategory] = useState(null);
  const [status, setStatus] = useState(null);
  const {
    register,
    handleSubmit,
    getValues,

    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      price: null,
      description: "",
      status: Number(null),
      shortName: "",
      categoryID: "",
    },

    resolver: yupResolver(courseUploadSchema),
  });

  const shortNameFilter = () => {
    let shortName = watch("shortName");
    setValue("shortName", shortName.replace(/\s/g, "-"));
  };

  useEffect(() => {
    setOptions(
      categories.map((cat) => ({
        ...cat,
        fn: (value) => {
          setValue("categoryID", value?._id);
          setCategory(value);
        },
      }))
    );
  }, [categories]);

  const [formattedPrice, setFormattedPrice] = useState("");

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === "price") {
        const priceValue = parseInt(value.price || 0, 10);
        setFormattedPrice(priceValue.toLocaleString());
      }
    });

    // Cleanup subscription on unmount
    return () => subscription.unsubscribe();
  }, [watch]);

  const submitted = (values) => {
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("shortName", values.shortName);
    formData.append("categoryID", values.categoryID);
    formData.append("price", values.price);
    formData.append("status", values.status);
    formData.append("description", values.description);
    formData.append("cover", file);

    newCourse(formData);
  };

  const statusOpts = [
    {
      id: crypto.randomUUID(),
      title: "پیش فروش",
      status: "presell",
      fn: (value) => {
        setStatus(value);
        setValue("status", value.status);
      },
    },
    {
      id: crypto.randomUUID(),
      title: "آغاز شده",
      status: "start",
      fn: (value) => {
        setStatus(value);
        setValue("status", value.status);
      },
    },
  ];

  return (
    <>
      <ToastContainer bodyClassName={"font-Dana-Regular"} />
      <div className="flex mb-6 items-center justify-between">
        <h1 className="text-2xl font-Dana-Demi ">داشبورد | ایجاد دوره</h1>
      </div>
      <form
        onSubmit={handleSubmit(submitted)}
        className="w-full p-4 dark:bg-dark-800 rounded-lg"
      >
        <div className="w-full grid mb-4 grid-cols-3 gap-4 child:w-full">
          <label htmlFor="product-name">
            <span className="mb-2 block text-sm dark:text-zinc-200">
              عنوان محصول
            </span>
            <input
              id="product-name"
              {...register("name")}
              type="text"
              className="w-full h-10 rounded-md border text-sm dark:border-white/5 px-4 outline-none"
              placeholder="عنوان محصول را وارد نمائید .."
            />
            <Error errors={errors} target={"name"} />
          </label>

          {/* Product Price */}
          <label htmlFor="product-price">
            <span className="mb-2 block text-sm dark:text-zinc-200">
              قیمت محصول
            </span>
            <input
              id="product-price"
              {...register("price")}
              type="number"
              className="w-full h-10 rounded-md border text-sm dark:border-white/5 px-4 outline-none"
              placeholder="قیمت محصول را وارد نمائید .."
            />
            <div className="text-xs pr-4 text-teal-500">
              {formattedPrice && +formattedPrice !== 0 && (
                <span> {formattedPrice} هزارتومان </span>
              )}
            </div>
            <Error errors={errors} target={"price"} />
          </label>

          {/* Product shortName */}
          <label htmlFor="product-shortName">
            <span className="mb-2 block text-sm dark:text-zinc-200">
              عنوان کوتاه محصول
            </span>
            <input
              onKeyUp={shortNameFilter}
              id="product-shortName"
              {...register("shortName")}
              type="text"
              className="w-full h-10 rounded-md border text-sm dark:border-white/5 px-4 outline-none"
              placeholder="عنوان کوتاه محصول را وارد نمائید .."
            />
            <Error errors={errors} target={"shortName"} />
          </label>
          <div>
            <Selectbox
              className={"w-full dark:bg-dark-900 h-10 mb-4 rounded-md"}
              selected={category}
              items={options}
              selector={quickSelect}
            />
            <Error errors={errors} target={"categoryID"} />
          </div>
          <div>
            <Selectbox
              className={"w-full dark:bg-dark-900 h-10 mb-4 rounded-md"}
              selected={status}
              items={statusOpts}
              selector={quickSelect}
            />
            <Error errors={errors} target={"status"} />
          </div>
        </div>
        <div className="my-3">
          <FileUplad
            acceptable={".jpg, .png, .jfif, .jpeg"}
            file={file}
            className="my-4 "
            fileSaveTo={setFile}
          />
        </div>
        <TextEditor data={getValues("description")} dataSet={setValue} />
        <Error errors={errors} target={"description"} />

        <Button className="my-2" size="small" type="submit" variant="success">
          ایجاد دوره
        </Button>
      </form>
    </>
  );
};

export default CourseCreate;
