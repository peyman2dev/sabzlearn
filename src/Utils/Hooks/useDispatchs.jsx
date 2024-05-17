import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMeuns } from "../Redux/actions/actions.js";
export default function useDispatchs() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('hi')
    dispatch(getMeuns())
  }, []);
}
