import * as Yup from "yup";

export const validationSchema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title must not exceed 100 characters"),
  description: Yup.string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters"),
  status: Yup.string()
    .required("Status is required")
    .oneOf(["pending", "in-progress", "completed", "blocked"]),
  priority: Yup.string()
    .required("Priority is required")
    .oneOf(["low", "medium", "high"]),
  dueDate: Yup.date()
    .required("Due date is required")
    .min(new Date(), "Due date cannot be in the past"),
  category: Yup.string()
    .required("Category is required")
    .min(2, "Category must be at least 2 characters"),
  assignee: Yup.string()
    .required("Assignee is required")
    .min(2, "Assignee name must be at least 2 characters"),
  tags: Yup.string().required("At least one tag is required"),
});
