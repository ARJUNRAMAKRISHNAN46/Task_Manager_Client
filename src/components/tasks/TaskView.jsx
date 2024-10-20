import React, { useState } from 'react';
import {
  ChevronLeft,
  Save,
  CheckCircle,
  Circle,
  Clock,
  AlertCircle,
  CalendarDays,
  User,
  Tag,
  Bookmark
} from 'lucide-react';

const priorityOptions = {
  high: { label: "High Priority", color: "red" },
  medium: { label: "Medium Priority", color: "yellow" },
  low: { label: "Low Priority", color: "green" },
};

const statusOptions = {
  pending: { label: "Pending", icon: Circle },
  "in-progress": { label: "In Progress", icon: Clock },
  completed: { label: "Completed", icon: CheckCircle },
  blocked: { label: "Blocked", icon: AlertCircle },
};

const TaskViewPage = ({ task: initialTask, onClose, theme }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(initialTask);
  const [formData, setFormData] = useState({
    title: initialTask.title,
    description: initialTask.description,
    status: initialTask.status,
    priority: initialTask.priority,
    dueDate: initialTask.dueDate,
    assignee: initialTask.assignee,
    category: initialTask.category,
    tags: initialTask.tags.join(', ')
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()),
      id: task.id
    };
    console.log('Updated Task Data:', updatedTask);
    setTask(updatedTask);
    setIsEditing(false);
  };

  const getPriorityBadgeStyles = (priority) => {
    const baseStyles = "px-2.5 py-0.5 rounded-full text-xs font-medium";
    const styles = {
      high: theme === "light" 
        ? "bg-red-100 text-red-800" 
        : "bg-red-900/30 text-red-300",
      medium: theme === "light" 
        ? "bg-yellow-100 text-yellow-800" 
        : "bg-yellow-900/30 text-yellow-300",
      low: theme === "light" 
        ? "bg-green-100 text-green-800" 
        : "bg-green-900/30 text-green-300"
    };
    return `${baseStyles} ${styles[priority]}`;
  };

  const getStatusIcon = (status) => {
    const StatusIcon = statusOptions[status]?.icon || AlertCircle;
    const iconColors = {
      completed: "text-green-500",
      "in-progress": "text-blue-500",
      pending: "text-yellow-500",
      blocked: "text-red-500",
    };
    return <StatusIcon className={`h-5 w-5 ${iconColors[status] || "text-gray-500"}`} />;
  };

  const bgColor = theme === "light" ? "bg-gray-50" : "bg-gray-900";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";
  const cardBgColor = theme === "light" ? "bg-white" : "bg-gray-800";
  const borderColor = theme === "light" ? "border-gray-200" : "border-gray-700";
  const inputBgColor = theme === "light" ? "bg-white" : "bg-gray-700";
  const inputTextColor = theme === "light" ? "text-gray-900" : "text-gray-100";

  return (
    <div className={`fixed inset-0 ${bgColor} overflow-y-auto`}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={onClose}
            className={`flex items-center ${textColor} hover:opacity-80`}
          >
            <ChevronLeft className="h-5 w-5 mr-2" />
            Back to Tasks
          </button>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`px-4 py-2 rounded-lg ${
              isEditing 
                ? "bg-red-500 hover:bg-red-600" 
                : "bg-blue-500 hover:bg-blue-600"
            } text-white transition-colors`}
          >
            {isEditing ? "Cancel" : "Edit Task"}
          </button>
        </div>

        {/* Main Card */}
        <div className={`rounded-lg ${cardBgColor} border ${borderColor} shadow-sm`}>
          {/* Card Header */}
          <div className="border-b ${borderColor} p-6">
            <h1 className={`text-2xl font-semibold ${textColor}`}>
              {isEditing ? "Edit Task" : "Task Details"}
            </h1>
          </div>

          {/* Card Content */}
          <div className="p-6">
            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className={`block mb-1 ${textColor}`}>Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 rounded-lg border ${borderColor} ${inputBgColor} ${inputTextColor} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                  />
                </div>

                <div>
                  <label className={`block mb-1 ${textColor}`}>Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                    className={`w-full px-3 py-2 rounded-lg border ${borderColor} ${inputBgColor} ${inputTextColor} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block mb-1 ${textColor}`}>Status</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 rounded-lg border ${borderColor} ${inputBgColor} ${inputTextColor} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    >
                      {Object.entries(statusOptions).map(([value, { label }]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={`block mb-1 ${textColor}`}>Priority</label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 rounded-lg border ${borderColor} ${inputBgColor} ${inputTextColor} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    >
                      {Object.entries(priorityOptions).map(([value, { label }]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={`block mb-1 ${textColor}`}>Due Date</label>
                    <div className="relative">
                      <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="date"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-3 py-2 rounded-lg border ${borderColor} ${inputBgColor} ${inputTextColor} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block mb-1 ${textColor}`}>Assignee</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        name="assignee"
                        value={formData.assignee}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-3 py-2 rounded-lg border ${borderColor} ${inputBgColor} ${inputTextColor} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block mb-1 ${textColor}`}>Category</label>
                    <div className="relative">
                      <Bookmark className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-3 py-2 rounded-lg border ${borderColor} ${inputBgColor} ${inputTextColor} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block mb-1 ${textColor}`}>Tags (comma-separated)</label>
                    <div className="relative">
                      <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        name="tags"
                        value={formData.tags}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-3 py-2 rounded-lg border ${borderColor} ${inputBgColor} ${inputTextColor} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(task.status)}
                    <h2 className={`text-xl font-semibold ${textColor}`}>
                      {task.title}
                    </h2>
                  </div>
                  <span className={getPriorityBadgeStyles(task.priority)}>
                    {priorityOptions[task.priority].label}
                  </span>
                </div>

                <p className={`${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                  {task.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`flex items-center ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                    <CalendarDays className="h-5 w-5 mr-2" />
                    Due: {task.dueDate}
                  </div>
                  <div className={`flex items-center ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                    <User className="h-5 w-5 mr-2" />
                    Assignee: {task.assignee}
                  </div>
                  <div className={`flex items-center ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                    <Bookmark className="h-5 w-5 mr-2" />
                    Category: {task.category}
                  </div>
                </div>

                <div>
                  <h3 className={`text-sm font-medium mb-2 ${textColor} flex items-center`}>
                    <Tag className="h-4 w-4 mr-2" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {task.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 rounded-md text-xs ${
                          theme === "light"
                            ? "bg-gray-100 text-gray-600"
                            : "bg-gray-700 text-gray-300"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskViewPage;