import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { registerSchema as schema } from "../../../Utils/Validations/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import Error from "../../Reusable/Messages/Error";
import { useDispatch } from "react-redux";
import { getRegister } from "../../../Utils/Redux/actions/actions";
export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const submitted = (data) => {
    dispatch(
      getRegister({
        user: {
          ...data,
          confirmPassword: data.password,
        },
        setIsLoading,
      })
    );
  };

  return (
    <>
      <ToastContainer bodyClassName={"font-Dana-Regular"} />
      <form onSubmit={handleSubmit(submitted)} className="form">
        <header className="mb-6 w-full flex items-center justify-center gap-1 flex-col">
          <h1 className="font-Dana-Bold text-zinc-700 dark:text-slate-100 text-2xl">
            عضویت
          </h1>
          <div className="flex text-sm items-center gap-1  text-zinc-500">
            <span>حساب کاربری دارید؟</span>
            <Link
              to={"/auth/login"}
              className="text-emerald-500 font-Dana-Medium"
            >
              وارد شوید
            </Link>
          </div>
        </header>
        <main>
          <input
            type="text"
            {...register("name")}
            placeholder="نام و نام خانوادگی .."
            className="form-input"
          />
          <Error errors={errors} target={"name"} />
          <input
            type="text"
            {...register("username")}
            placeholder="نام کاربری .."
            className="form-input"
          />
          <Error errors={errors} target={"username"} />
          <input
            type="text"
            {...register("email")}
            placeholder="پست الکترونیکی .."
            className="form-input"
          />
          <Error errors={errors} target={"email"} />
          <input
            type="text"
            {...register("phone")}
            placeholder="تلفن همراه .."
            className="form-input"
          />
          <Error errors={errors} target={"phone"} />
          <input
            type="password"
            {...register("password")}
            placeholder="گذرواژه .."
            className="form-input"
          />
          <Error errors={errors} target={"password"} />
        </main>
        <footer className="mt-4">
          <button
            disabled={isLoading}
            className={`w-full h-12 ${
              isLoading ? "bg-[rgba(67,225,167,0.3)]" : "bg-emerald-400"
            } rounded-lg text-white text-center flex items-center justify-center active-animation`}
          >
            عضویت
          </button>
        </footer>
      </form>
    </>
  );
}
