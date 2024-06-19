import React from "react";
import PropTypes from "prop-types";

/**
 * @param {Object} props - Component props
 * @param {"extra-small"|"small"|"medium"|"large"} props.size - The size of the button
 * @param {"success"|"info"|"danger"} props.variant - The variant of the button
 * @param {function} props.fn - The click handler function for the button
 * @param {React.ReactNode} props.children - The content of the button
 */
function Button({ variant, children, fn, size }) {
  return (
    <button onClick={fn} className={`button ${variant} ${size}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(["extra-small", "small", "medium", "large"]).isRequired,
  variant: PropTypes.oneOf(["info", "danger", "success"]).isRequired,
  fn: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default Button;
