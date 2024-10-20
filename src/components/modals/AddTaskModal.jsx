import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  X,
  Calendar,
  Tag,
  User,
  FileText,
  Folder,
  AlertCircle,
  Flag,
  Clock,
} from "lucide-react";
import { validationSchema } from "../../validations/CreateTask";

const AddTaskModal = ({ isOpen, onClose, onAddTask, theme }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const initialValues = {
    title: "",
    description: "",
    status: "pending",
    priority: "medium",
    dueDate: "",
    category: "",
    assignee: "",
    tags: "",
  };

  const bgColor = theme === "light" ? "bg-white" : "bg-gray-800";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";
  const borderColor = theme === "light" ? "border-gray-200" : "border-gray-700";
  const inputBgColor = theme === "light" ? "bg-gray-50" : "bg-gray-700";
  const labelColor = theme === "light" ? "text-gray-700" : "text-gray-300";
  const iconColor = theme === "light" ? "text-gray-500" : "text-gray-400";
  const errorColor = "text-red-500";

  const handleSubmit = (values, { setSubmitting }) => {
    const formattedTags = values.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");

    const newTask = {
      ...values,
      id: Date.now(),
      tags: formattedTags,
    };

    onAddTask(newTask);
    onClose();
    setSubmitting(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className={`w-full max-w-2xl ${bgColor} rounded-lg shadow-xl flex flex-col max-h-[90vh]`}>
        {/* Fixed Header */}
        <div
          className={`flex items-center justify-between p-4 border-b ${borderColor} flex-shrink-0`}
        >
          <h2 className={`text-xl font-semibold ${textColor}`}>Add New Task</h2>
          <button
            onClick={onClose}
            className={`p-1 rounded-full hover:${inputBgColor} ${iconColor}`}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="flex-1 overflow-y-auto">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="p-4 space-y-4">
                {/* Form fields remain the same */}
                {/* Title */}
                <div className="space-y-2">
                  <label className={`block text-sm font-medium ${labelColor}`}>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Title
                    </div>
                  </label>
                  <Field
                    name="title"
                    className={`w-full px-3 py-2 rounded-lg border ${borderColor} ${inputBgColor} ${textColor}`}
                    placeholder="Enter task title"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className={errorColor}
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className={`block text-sm font-medium ${labelColor}`}>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Description
                    </div>
                  </label>
                  <Field
                    as="textarea"
                    name="description"
                    rows={3}
                    className={`w-full px-3 py-2 rounded-lg border ${borderColor} ${inputBgColor} ${textColor}`}
                    placeholder="Enter task description"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className={errorColor}
                  />
                </div>

                {/* Priority & Status */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className={`block text-sm font-medium ${labelColor}`}>
                      <div className="flex items-center gap-2">
                        <Flag className="h-4 w-4" />
                        Priority
                      </div>
                    </label>
                    <Field
                      as="select"
                      name="priority"
                      className={`w-full px-3 py-2 rounded-lg border ${borderColor} ${inputBgColor} ${textColor}`}
                    >
                      <option value="low">Low Priority</option>
                      <option value="medium">Medium Priority</option>
                      <option value="high">High Priority</option>
                    </Field>
                    <ErrorMessage
                      name="priority"
                      component="div"
                      className={errorColor}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className={`block text-sm font-medium ${labelColor}`}>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Status
                      </div>
                    </label>
                    <Field
                      as="select"
                      name="status"
                      className={`w-full px-3 py-2 rounded-lg border ${borderColor} ${inputBgColor} ${textColor}`}
                    >
                      <option value="pending">Pending</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="blocked">Blocked</option>
                    </Field>
                    <ErrorMessage
                      name="status"
                      component="div"
                      className={errorColor}
                    />
                  </div>
                </div>

                {/* Due Date & Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className={`block text-sm font-medium ${labelColor}`}>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Due Date
                      </div>
                    </label>
                    <Field
                      type="date"
                      name="dueDate"
                      className={`w-full px-3 py-2 rounded-lg border ${borderColor} ${inputBgColor} ${textColor}`}
                    />
                    <ErrorMessage
                      name="dueDate"
                      component="div"
                      className={errorColor}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className={`block text-sm font-medium ${labelColor}`}>
                      <div className="flex items-center gap-2">
                        <Folder className="h-4 w-4" />
                        Category
                      </div>
                    </label>
                    <Field
                      name="category"
                      className={`w-full px-3 py-2 rounded-lg border ${borderColor} ${inputBgColor} ${textColor}`}
                      placeholder="Enter category"
                    />
                    <ErrorMessage
                      name="category"
                      component="div"
                      className={errorColor}
                    />
                  </div>
                </div>

                {/* Assignee */}
                <div className="space-y-2">
                  <label className={`block text-sm font-medium ${labelColor}`}>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Assignee
                    </div>
                  </label>
                  <Field
                    name="assignee"
                    className={`w-full px-3 py-2 rounded-lg border ${borderColor} ${inputBgColor} ${textColor}`}
                    placeholder="Enter assignee name"
                  />
                  <ErrorMessage
                    name="assignee"
                    component="div"
                    className={errorColor}
                  />
                </div>

                {/* Tags */}
                <div className="space-y-2">
                  <label className={`block text-sm font-medium ${labelColor}`}>
                    <div className="flex items-center gap-2">
                      <Tag className="h-4 w-4" />
                      Tags
                    </div>
                  </label>
                  <Field
                    name="tags"
                    className={`w-full px-3 py-2 rounded-lg border ${borderColor} ${inputBgColor} ${textColor}`}
                    placeholder="Enter tags separated by commas"
                  />
                  <ErrorMessage
                    name="tags"
                    component="div"
                    className={errorColor}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* Fixed Footer */}
        <div
          className={`flex justify-end gap-3 p-4 border-t ${borderColor} flex-shrink-0`}
        >
          <button
            type="button"
            onClick={onClose}
            className={`px-4 py-2 rounded-lg border ${borderColor} ${textColor} hover:${inputBgColor}`}
          >
            Cancel
          </button>
          <button
            form="task-form"
            type="submit"
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;