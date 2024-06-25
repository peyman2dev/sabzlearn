import React, { useEffect } from "react";
import useRouter from "./Utils/Hooks/useRouter";
import useDispatchs from "./Utils/Hooks/useDispatchs";
import { NextUIProvider } from "@nextui-org/system";

export default function App() {

  const routes = useRouter();
  const dispatchs = useDispatchs();

  return <NextUIProvider>{routes}</NextUIProvider>;
}
