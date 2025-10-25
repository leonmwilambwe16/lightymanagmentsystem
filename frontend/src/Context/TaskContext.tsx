// src/Context/TaskContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { TaskForm } from "../Types/Interface/TaskManager";

interface TaskContextType {
  tasks: TaskForm[];
  addTask: (task: TaskForm) => void;
  updateTask: (taskId: string, updatedTask: Partial<TaskForm>) => void;
  deleteTask: (taskId: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProviderr: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<TaskForm[]>([]);

  // ✅ Load tasks from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  // ✅ Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: TaskForm) => setTasks(prev => [...prev, task]);

  const updateTask = (taskId: string, updatedTask: Partial<TaskForm>) => {
    setTasks(prev =>
      prev.map(t => (t.id === taskId ? { ...t, ...updatedTask } : t))
    );
  };

  const deleteTask = (taskId: string) => {
    setTasks(prev => prev.filter(t => t.id !== taskId));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
};
