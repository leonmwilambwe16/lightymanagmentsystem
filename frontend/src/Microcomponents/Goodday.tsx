// src/Microcomponents/Goodday.tsx
import React from 'react';
import '../Styles/Micocompnent.styles/Goodday.scss';
import { useTasks } from '../Context/TaskContext';

const Goodday: React.FC = () => {
  const { tasks } = useTasks();

  const totalTasks = tasks.length;
  const pendingtask = tasks.filter(t => t.priority === "Low").length;
  const inprogresstask = tasks.filter(t => t.priority === "Medium").length;
  const completedtasks = tasks.filter(t => t.priority === "High").length;

  const greetings = "Good Morning!";
  const name = "Leon";
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  return (
    <div className='container-godday'>
      <div className="greet-section">
        <h2>{greetings} <span>{name}</span></h2>
        <small>{date}</small>
      </div>

      <div className="statics-task">
        <span><div className='line'></div><p className='numbers-total'>{totalTasks}</p><p>Total Tasks</p></span>
        <span><div className='line' style={{background:"purple"}}></div><p className='numbers-total'>{pendingtask}</p><p>Pending</p></span>
        <span><div className='line' style={{background:"blue"}}></div><p className='numbers-total'>{inprogresstask}</p><p>In Progress</p></span>
        <span><div className='line' style={{background:"green"}}></div><p className='numbers-total'>{completedtasks}</p><p>High Priority</p></span>
      </div>
    </div>
  );
};

export default Goodday;

