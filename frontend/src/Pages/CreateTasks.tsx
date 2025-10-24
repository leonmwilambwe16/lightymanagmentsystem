// src/Pages/CreateTasks.tsx
import React, { useState } from 'react';
import '../Styles/Pages.styles/CreateTasks.scss';
import { FiUsers } from "react-icons/fi";
import type { TaskForm } from "../Types/Interface/TaskManager";
import { useTasks } from '../Context/TaskContext';

const CreateTasks: React.FC = () => {
  const { addTask } = useTasks();
  const [formData, setFormData] = useState<TaskForm>({
    id: "",
    taskTitle: "",
    description: "",
    priority: "Medium",
    dueDate: "",
    assignedTo: [],
    todoList: [],
    attachments: []
  });
  const [todoInput, setTodoInput] = useState("");
  const [attachmentInput, setAttachmentInput] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = { ...formData, id: crypto.randomUUID() };
    addTask(newTask);
    alert("✅ Task added successfully!");
    setFormData({
      id: "",
      taskTitle: "",
      description: "",
      priority: "Medium",
      dueDate: "",
      assignedTo: [],
      todoList: [],
      attachments: []
    });
    setTodoInput("");
    setAttachmentInput("");
  };

  const addTodo = () => {
    if (todoInput.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        todoList: [...prev.todoList, todoInput]
      }));
      setTodoInput("");
    }
  };

  const addAttachment = () => {
    if (attachmentInput.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        attachments: [...prev.attachments, attachmentInput]
      }));
      setAttachmentInput("");
    }
  };

  return (
    <div className="container-task-create">
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Task Title</label>
        <input
          className="create-input-ui"
          type="text"
          name="taskTitle"
          placeholder="Create App UI"
          value={formData.taskTitle}
          onChange={handleChange}
        />

        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <div className="priority-section">
          <div className="filed-section">
            <label>Priority</label>
            <select name="priority" value={formData.priority} onChange={handleChange}>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="filed-section">
            <label>Due Date</label>
            <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} />
          </div>

          <div className="filed-section">
            <label>Assign To</label>
            <button type="button">
              <FiUsers /> <span>Add Members</span>
            </button>
          </div>
        </div>

        <div className="Todo-list">
          <div className="checklist">
            <label>TODO Checklist</label>
            <div className="input-check">
              <input
                type="text"
                value={todoInput}
                onChange={(e) => setTodoInput(e.target.value)}
                placeholder="Add a todo item"
              />
              <button type="button" onClick={addTodo}>Add</button>
            </div>
            <ul>
              {formData.todoList.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>

          <div className="checklist">
            <label>Add Attachments</label>
            <div className="input-check">
              <input
                type="text"
                placeholder="Add File link"
                value={attachmentInput}
                onChange={(e) => setAttachmentInput(e.target.value)}
              />
              <button type="button" onClick={addAttachment}>Add</button>
            </div>
            <ul>
              {formData.attachments.map((link, index) => <li key={index}>{link}</li>)}
            </ul>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateTasks;
