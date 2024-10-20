import React from "react";
import Input from "./Input";

const FormField = ({ label, icon, error, className = "", ...props }) => (
  <div className="space-y-1.5">
    {label && (
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        {label}
      </label>
    )}
    <Input icon={icon} error={error} {...props} />
  </div>
);

export default FormField;
