import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMe, getMeuns } from "../Redux/actions/actions.js";
export default function useDispatchs() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeuns());
    dispatch(getMe())
  }, []);
}
