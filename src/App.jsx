import React from "react";
import useRouter from "./Utils/Hooks/useRouter";
import useDispatchs from "./Utils/Hooks/useDispatchs";

export default function App() {
  const routes = useRouter();
  useDispatchs();

  return routes;
}
