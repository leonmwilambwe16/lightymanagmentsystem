import React, { useState } from "react";
import { PiSpiral } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/bs";
import "../Styles/Pages.styles/ManagmentTasks.scss";
import { useTasks } from "../Context/TaskContext";

interface Task {
  id: string | number;
  taskTitle: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  todoList: any[];
  dueDate?: string;
  attachments: any[];
}

const ManagmentTasks: React.FC = () => {
  const { tasks, updateTask, deleteTask } = useTasks();

  const [selectedTaskId, setSelectedTaskId] = useState<string | number | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editDueDate, setEditDueDate] = useState("");
  const [editPriority, setEditPriority] = useState<"High" | "Medium" | "Low">("Low");

  // Select card
  const handleCardClick = (task: Task) => {
    setSelectedTaskId(selectedTaskId === task.id ? null : task.id);
  };

  // Start editing
  const handleEditClick = (task: Task) => {
    setIsEditing(true);
    setEditTitle(task.taskTitle);
    setEditDescription(task.description);
    setEditDueDate(task.dueDate || "");
    setEditPriority(task.priority);
  };

  // Save changes
  const handleUpdateSubmit = () => {
    if (selectedTaskId != null) {
      updateTask(selectedTaskId, {
        taskTitle: editTitle,
        description: editDescription,
        dueDate: editDueDate,
        priority: editPriority,
      });
    }
    setIsEditing(false);
  };

  // Delete task
  const handleDeleteClick = (taskId: string | number) => {
    deleteTask(taskId);
    setSelectedTaskId(null);
  };

  return (
    <div className="task-managment-container">
      <h2>My Tasks</h2>
      <div className="task-card">
        {tasks.length === 0 && <p>No tasks created yet.</p>}

        {tasks.map((task) => {
          const doneCount = task.todoList.length > 0 ? Math.floor(task.todoList.length / 2) : 0;
          const totalCount = task.todoList.length || 1;
          const progress = (doneCount / totalCount) * 100;
          const isSelected = selectedTaskId === task.id;

          return (
            <div
              className={`card-task-box ${task.priority.toLowerCase()}`}
              key={task.id}
              onClick={() => handleCardClick(task)}
            >
              <div className="priority">
                <span className="status">
                  <BsFillCircleFill /> In Progress
                </span>
                <span className={`priority-tag ${task.priority.toLowerCase()}-priority`}>
                  {task.priority} Priority
                </span>
              </div>

              <div className="tasktitle-description">
                <h3>{task.taskTitle}</h3>
                <p>{task.description}</p>
                <span>
                  Progress <small>{doneCount}/{totalCount}</small>
                </span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${progress}%` }}></div>
                </div>
              </div>

              <div className="date-avatar">
                <div className="start-dte-icons">
                  <p>Start: {new Date().toLocaleDateString()}</p>
                  <div className="iconpictures">
                    <FaUserCircle size={18} />
                  </div>
                </div>

                <div className="duedate">
                  <div className="due-container">
                    <p>Due: {task.dueDate || "—"}</p>
                  </div>
                  <div className="epingle">
                    <span>
                      <PiSpiral size={16} />
                      <p>{task.attachments.length}</p>
                    </span>
                  </div>
                </div>
              </div>

              {isSelected && (
                <div className="actions">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditClick(task);
                    }}
                  >
                    Update
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteClick(task.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ✅ Edit popup */}
      {isEditing && (
        <div className="edit-popup">
          <div className="popup-content">
            <h3>Edit Task</h3>

            <label>Title:</label>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />

            <label>Description:</label>
            <textarea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />

            <label>Due Date:</label>
            <input
              type="date"
              value={editDueDate}
              onChange={(e) => setEditDueDate(e.target.value)}
            />

            <label>Priority:</label>
            <select
              value={editPriority}
              onChange={(e) =>
                setEditPriority(e.target.value as "High" | "Medium" | "Low")
              }
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <div className="popup-actions">
              <button onClick={handleUpdateSubmit}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagmentTasks;
