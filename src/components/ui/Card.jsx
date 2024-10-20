import React from "react";

export const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden ${className}`}
  >
    {children}
  </div>
);

export const CardHeader = ({ children, className = "" }) => (
  <div
    className={`p-6 border-b border-gray-200 dark:border-gray-700 ${className}`}
  >
    {children}
  </div>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className = "" }) => (
  <div
    className={`p-6 border-t border-gray-200 dark:border-gray-700 ${className}`}
  >
    {children}
  </div>
);
