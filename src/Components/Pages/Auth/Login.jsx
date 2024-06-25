import React, { useState } from "react";
import { loginSchema as schema } from "../../../Utils/Validations/validations";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import Error from "../../Reusable/Messages/Error";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useDispatch } from "react-redux";
import { getLogin } from "../../../Utils/Redux/actions/actions.js";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const submitted = (user) => {
    setIsLoading(true);
    dispatch(getLogin({ user, setIsLoading }));
  };
  return (
    <>
      <ToastContainer bodyClassName={"font-Dana-Regular"} />
      <form onSubmit={handleSubmit(submitted)} className="form ">
        <header className="mb-6 w-full flex items-center justify-center gap-1 flex-col">
          <h1 className=" font-Dana-Bold text-zinc-700 dark:text-slate-100 text-2xl">
            وارد شوید
          </h1>
          <div className="flex text-sm items-center gap-1  text-zinc-500">
            <span>حساب کاربری ندارید؟</span>
            <Link
              to={"/auth/register"}
              className="text-emerald-500 font-Dana-Medium"
            >
              عضویت
            </Link>
          </div>
        </header>
        <main>
          <input
            className="form-input"
            placeholder="نام کاربری .."
            {...register("identifier")}
            type="text"
          />
          <Error errors={errors} target={"identifier"} />
          <input
            className="form-input"
            placeholder="گذرواژه .."
            {...register("password")}
            type="password"
          />
          <Error errors={errors} target={"password"} />
          <div className="w-full mt-3 justify-between flex items-center">
            <div className="flex items-center max-w-max dark:text-slate-400 text-zinc-600 text-sm select-none gap-1">
              <input id="rememberme" type="checkbox" />
              <label
                htmlFor="rememberme"
                className="tracking-tight font-Dana-Medium"
              >
                مرا به خاطر بسپار
              </label>
            </div>
            <div>
              <Link className="text-sm text-sky-500">فراموشی گذرواژه</Link>
            </div>
          </div>
        </main>
        <footer className="mt-4">
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full h-12 ${
              isLoading ? "bg-[rgba(67,225,167,0.3)]" : "bg-emerald-400"
            } rounded-lg text-white text-center flex items-center justify-center active-animation`}
          >
            ورود
          </button>
          <div className="mt-7 flex items-center justify-center before:absolute before:px-3 text-sm text-zinc-500 dark:text-slate-500 before:bg-white before:dark:bg-dark-800 before:content-['وارد_شوید_با'] relative w-full h-px bg-black/10"></div>
          <div className="mt-6 h-14 gap-1 bg-[#00000012] flex rounded-md select-none items-center px-3 justify-center shadow-md active-animation cursor-pointer">
            <span>ورود با جیمیل</span>
            <img
              src="../../../../public/images/svgs/google.webp"
              className="w-5"
              alt=""
            />
          </div>
        </footer>
      </form>
    </>
  );
}
