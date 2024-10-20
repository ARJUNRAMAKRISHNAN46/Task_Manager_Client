import React from "react";

const Input = ({ icon: Icon, error, className = "", ...props }) => (
  <div className="relative w-full">
    {Icon && (
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
        <Icon className="h-5 w-5" />
      </div>
    )}
    <input
      className={`w-full h-11 rounded-lg border border-gray-300 
      ${Icon ? "pl-11" : "pl-4"} pr-4
      text-base
      placeholder:text-gray-400
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
      dark:bg-gray-800 dark:border-gray-700 dark:text-white 
      disabled:opacity-50 disabled:cursor-not-allowed
      ${error ? "border-red-500 dark:border-red-400 focus:ring-red-500" : ""}
      ${className}`}
      {...props}
    />
    {error && (
      <div className="absolute left-0 -bottom-5 text-red-500 text-xs mt-1">
        {error}
      </div>
    )}
  </div>
);

export default Input;
