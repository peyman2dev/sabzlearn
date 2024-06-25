import React from "react";
import { useParams } from "react-router-dom";
import Register from "../Components/Pages/Auth/Register";
import Login from "../Components/Pages/Auth/Login";

export default function Auth() {
  const { method } = useParams();
  console.log(method)
  return (
    <section className="w-full min-h-screen bg-white lg:bg-transparent dark:bg-dark-900 max-h-screen child:max-h-max  flex items-center justify-center">
      {method === "register" ? <Register /> : <Login />}
    </section>
  );
}
