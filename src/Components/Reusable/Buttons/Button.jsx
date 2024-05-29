import React from "react";
import PropTypes from "prop-types";

/**
 * @param {"primary" | "secondary" | "light" | "info" | "danger" | "loading"}
 */

const Button = ({ icon, title, variant, action }) => {
  return (
    <button onClick={action} className={`button pt-0.5 active-animation ${variant}`}>
      <span>{title}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "light",
    "info",
    "danger",
    "loading"
  ]).isRequired,
  action: PropTypes.func.isRequired,
};

Button.defaultProps = {
  icon: null,
  action: () => {},
  variant: "primary",
};

export default Button;
