import React from "react";

const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
