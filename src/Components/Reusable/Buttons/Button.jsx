import React from "react";
import PropTypes from "prop-types";

/**
 * @param {"primary" | "secondary" | "light" | "info" | "danger" | "loading"}
 */

const Button = ({ icon, title, variant, action }) => {
  return (
    <button onClick={() => action()} className={`button active-animation  ${variant}`}>
      <span>{title}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(
    "primary" | "secondary" | "light" | "info" | "danger" | "loading"
  ).isRequired,
};

export default Button;
