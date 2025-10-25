// src/Microcomponents/Recenttable.tsx
import React from 'react';
import '../Styles/Micocompnent.styles/Recenttable.scss';
import { GrLinkNext } from "react-icons/gr";
import { useTasks } from '../Context/TaskContext';

const Recenttable: React.FC = () => {
  const { tasks } = useTasks();

  return (
    <div className='table-recent-conatainer'>
      <div className="nav-table">
        <h2>Recent Tasks</h2>
        <button><span>See All</span><GrLinkNext /></button>
      </div>

      <div className="table-data">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Priority</th>
              <th>Due Date</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {tasks.slice(-5).reverse().map((task, index) => (
              <tr key={index}>
                <td>{task.taskTitle}</td>
                <td>
                  <span className={`priority-badge ${task.priority.toLowerCase()}`}>
                    {task.priority}
                  </span>
                </td>
                <td>{task.dueDate || "—"}</td>
                <td>{new Date().toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Recenttable;
