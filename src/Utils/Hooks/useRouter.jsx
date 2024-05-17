import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "../Routes/routes";

export default function useRouter() {
  const _routes = useRoutes(routes);

  return _routes;
}
