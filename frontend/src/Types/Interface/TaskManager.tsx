// src/Pages/TaskManager.tsx

export interface TaskForm {
  id: string;
  taskTitle: string;
  description: string;
  priority: string;
  dueDate: string;
  assignedTo: string[];
  todoList: string[];
  attachments: string[];
}
