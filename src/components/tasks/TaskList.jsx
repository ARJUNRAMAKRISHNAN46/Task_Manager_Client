import React from "react";
import { CheckCircle, Circle, Clock, AlertCircle } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const dummyTasks = [
  {
    id: 1,
    title: "Complete project proposal",
    description: "Write and submit the Q4 project proposal",
    status: "completed",
    priority: "high",
    dueDate: "2024-10-25",
  },
  {
    id: 2,
    title: "Design team meeting",
    description: "Weekly sync with the design team",
    status: "pending",
    priority: "medium",
    dueDate: "2024-10-21",
  },
  {
    id: 3,
    title: "Update documentation",
    description: "Review and update API documentation",
    status: "in-progress",
    priority: "low",
    dueDate: "2024-10-23",
  },
];

const TaskList = () => {
  const { theme } = useTheme();

  const getStatusIcon = (status) => {
    const iconClasses = {
      completed: theme === 'light' ? "text-green-600" : "text-green-400",
      "in-progress": theme === 'light' ? "text-blue-600" : "text-blue-400",
      pending: theme === 'light' ? "text-yellow-600" : "text-yellow-400",
      default: theme === 'light' ? "text-gray-600" : "text-gray-400"
    };

    switch (status) {
      case "completed":
        return <CheckCircle className={`h-5 w-5 ${iconClasses.completed}`} />;
      case "in-progress":
        return <Clock className={`h-5 w-5 ${iconClasses["in-progress"]}`} />;
      case "pending":
        return <Circle className={`h-5 w-5 ${iconClasses.pending}`} />;
      default:
        return <AlertCircle className={`h-5 w-5 ${iconClasses.default}`} />;
    }
  };

  const getPriorityColor = (priority) => {
    const priorityStyles = {
      high: theme === 'light'
        ? "text-red-700 bg-red-50 border border-red-200"
        : "text-red-300 bg-red-900/30 border border-red-700",
      medium: theme === 'light'
        ? "text-yellow-700 bg-yellow-50 border border-yellow-200"
        : "text-yellow-300 bg-yellow-900/30 border border-yellow-700",
      low: theme === 'light'
        ? "text-green-700 bg-green-50 border border-green-200"
        : "text-green-300 bg-green-900/30 border border-green-700",
      default: theme === 'light'
        ? "text-gray-700 bg-gray-50 border border-gray-200"
        : "text-gray-300 bg-gray-900/30 border border-gray-700"
    };

    return priorityStyles[priority] || priorityStyles.default;
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 ${
      theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'
    }`}>
      <h2 className={`text-2xl font-bold mb-6 ${
        theme === 'light' ? 'text-gray-900' : 'text-white'
      }`}>
        Tasks
      </h2>
      <div className="grid gap-4">
        {dummyTasks.map((task) => (
          <div
            key={task.id}
            className={`rounded-lg shadow-md p-4 transition-all duration-200 ${
              theme === 'light'
                ? 'bg-white hover:shadow-lg border border-gray-100'
                : 'bg-gray-800 hover:bg-gray-750 border border-gray-700'
            }`}
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-3">
                {getStatusIcon(task.status)}
                <div>
                  <h3 className={`text-lg font-semibold mb-1 ${
                    theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>
                    {task.title}
                  </h3>
                  <p className={`${
                    theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                  }`}>
                    {task.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(
                    task.priority
                  )}`}
                >
                  {task.priority}
                </span>
                <span className={`text-sm ${
                  theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  Due: {task.dueDate}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;