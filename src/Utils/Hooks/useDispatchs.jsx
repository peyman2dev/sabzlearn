import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getArticles, getCourses, getMe, getMeuns, getUsers } from "../Redux/actions/actions.js";
import themeHandler from "../Functions/themeHandler.js";
import { themeMount } from "../Redux/reducers/themeReducer.js";
export default function useDispatchs() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeuns());
    dispatch(getMe())
    dispatch(getUsers())
    dispatch(getArticles())
    dispatch(getCourses())
    dispatch(themeMount())
  }, []);
}
