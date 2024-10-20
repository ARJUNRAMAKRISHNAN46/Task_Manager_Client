import React, { useState, useEffect, useRef } from "react";
import {
  CheckCircle,
  Circle,
  Clock,
  AlertCircle,
  ChevronDown,
  Filter,
  Plus,
  Search,
  CalendarDays,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

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

const Dropdown = ({ trigger, items, onItemSelect }) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const bgColor = theme === "light" ? "bg-white" : "bg-gray-800";
  const borderColor = theme === "light" ? "border-gray-200" : "border-gray-700";
  const hoverColor =
    theme === "light" ? "hover:bg-gray-50" : "hover:bg-gray-700";

  return (
    <div className={`relative ${theme === "light" ? "text-gray-900" : "text-gray-200"}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${borderColor} ${bgColor} ${hoverColor} transition-colors`}
      >
        {trigger}
      </button>
      {isOpen && (
        <div
          className={`absolute z-10 mt-2 w-48 rounded-lg shadow-lg ${bgColor} border ${borderColor}`}
        >
          {items.map((item, index) => (
            <button
              key={index}
              className={`w-full text-left px-4 py-2 ${hoverColor} first:rounded-t-lg last:rounded-b-lg`}
              onClick={() => {
                onItemSelect(item);
                setIsOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default function TaskList() {
  const { theme, toggleTheme } = useTheme();
  const [filter, setFilter] = useState({ status: null, priority: null });
  const [searchQuery, setSearchQuery] = useState("");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete project proposal",
      description: "Write and submit the Q4 project proposal",
      status: "completed",
      priority: "high",
      dueDate: "2024-10-25",
      category: "Work",
      assignee: "John Doe",
      tags: ["documentation", "planning"],
    },
    {
      id: 2,
      title: "Design team meeting",
      description: "Weekly sync with the design team",
      status: "pending",
      priority: "medium",
      dueDate: "2024-10-21",
      category: "Meetings",
      assignee: "Jane Smith",
      tags: ["design", "team"],
    },
    {
      id: 3,
      title: "Update documentation",
      description: "Review and update API documentation",
      status: "in-progress",
      priority: "low",
      dueDate: "2024-10-23",
      category: "Development",
      assignee: "Mike Johnson",
      tags: ["documentation", "api"],
    },
  ]);

  const getStatusIcon = (status) => {
    const StatusIcon = statusOptions[status]?.icon || AlertCircle;
    const iconColors = {
      completed: "text-green-500",
      "in-progress": "text-blue-500",
      pending: "text-yellow-500",
      blocked: "text-red-500",
    };
    return (
      <StatusIcon
        className={`h-5 w-5 ${iconColors[status] || "text-gray-500"}`}
      />
    );
  };

  const getPriorityBadgeStyles = (priority) => {
    const baseStyles = "px-2.5 py-0.5 rounded-full text-xs font-medium";
    const styles = {
      high:
        theme === "light"
          ? "bg-red-100 text-red-800"
          : "bg-red-900/30 text-red-300",
      medium:
        theme === "light"
          ? "bg-yellow-100 text-yellow-800"
          : "bg-yellow-900/30 text-yellow-300",
      low:
        theme === "light"
          ? "bg-green-100 text-green-800"
          : "bg-green-900/30 text-green-300",
    };
    return `${baseStyles} ${styles[priority]}`;
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesStatus = !filter.status || task.status === filter.status;
    const matchesPriority =
      !filter.priority || task.priority === filter.priority;
    const matchesSearch =
      !searchQuery ||
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesPriority && matchesSearch;
  });

  const bgColor = theme === "light" ? "bg-gray-50" : "bg-gray-900";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";
  const secondaryTextColor =
    theme === "light" ? "text-gray-600" : "text-gray-300";
  const borderColor = theme === "light" ? "border-gray-200" : "border-gray-700";
  const cardBgColor = theme === "light" ? "bg-white" : "bg-gray-800";

  return (
    <div className={`min-h-screen ${bgColor} transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className={`text-3xl font-bold ${textColor}`}>Tasks</h2>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors">
              <Plus className="h-4 w-4" />
              Add Task
            </button>
          </div>
        </div>

        <div className="flex gap-4 flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 rounded-lg border ${borderColor} ${cardBgColor} ${textColor} placeholder-gray-400`}
              />
            </div>
          </div>

          <Dropdown
            trigger={
              <>
                <Filter
                  className={`h-4 w-4 ${
                    theme === "light" ? "text-gray-900" : "text-gray-200"
                  }`}
                />
                Status
                <ChevronDown
                  className={`h-4 w-4 ${
                    theme === "light" ? "text-gray-900" : "text-gray-200"
                  }`}
                />
              </>
            }
            items={Object.entries(statusOptions).map(([value, { label }]) => ({
              label,
              value,
            }))}
            onItemSelect={(item) =>
              setFilter((prev) => ({ ...prev, status: item.value }))
            }
          />

          <Dropdown
            trigger={
              <>
                <AlertCircle
                  className={`h-4 w-4 ${
                    theme === "light" ? "text-gray-900" : "text-gray-200"
                  }`}
                />
                Priority
                <ChevronDown
                  className={`h-4 w-4 ${
                    theme === "light" ? "text-gray-900" : "text-gray-200"
                  }`}
                />
              </>
            }
            items={Object.entries(priorityOptions).map(
              ([value, { label }]) => ({
                label,
                value,
              })
            )}
            onItemSelect={(item) =>
              setFilter((prev) => ({ ...prev, priority: item.value }))
            }
          />

          {(filter.status || filter.priority) && (
            <button
              onClick={() => setFilter({ status: null, priority: null })}
              className={`px-4 py-2 text-red-500 hover:text-red-600 ${cardBgColor} rounded-lg border ${borderColor}`}
            >
              Clear Filters
            </button>
          )}
        </div>

        <div className="grid gap-4">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className={`rounded-lg ${cardBgColor} shadow-sm border ${borderColor} p-4 transition-all duration-200 hover:shadow-md`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start space-x-3">
                  {getStatusIcon(task.status)}
                  <div>
                    <h3 className={`text-lg font-semibold ${textColor}`}>
                      {task.title}
                    </h3>
                    <p className={secondaryTextColor}>{task.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
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
                <div className="flex flex-col items-end space-y-2">
                  <span className={getPriorityBadgeStyles(task.priority)}>
                    {priorityOptions[task.priority].label}
                  </span>
                  <div
                    className={`flex items-center text-sm ${secondaryTextColor}`}
                  >
                    <CalendarDays className="h-4 w-4 mr-1" />
                    Due: {task.dueDate}
                  </div>
                  <div className={`text-sm ${secondaryTextColor}`}>
                    {task.category} • {task.assignee}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
