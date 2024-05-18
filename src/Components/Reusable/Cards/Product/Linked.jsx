import React from "react";
import { Link } from "react-router-dom";

export default function Linked({ children, url }) {
  return <Link to={url}>{children}</Link>;
}
