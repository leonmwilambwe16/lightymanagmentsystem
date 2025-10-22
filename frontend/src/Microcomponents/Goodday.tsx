import React from 'react'
import '../Styles/Micocompnent.styles/Goodday.scss'

interface GreetingsProps {
  name:string,
  greetings: string;
  date: string; 
  totalTasks: number;
  pendingtask: number;
  inprogresstask: number;
  completedtasks: number;
}

const greetingsData: GreetingsProps = {
  name:"Leon",
  greetings: "Good Morning!",
  date: new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
}),
  totalTasks: 10,
  pendingtask: 2,
  inprogresstask: 3,
  completedtasks: 5
};
 

const Goodday = () => {

  return (
    <div className='container-godday'>
      <div className="greet-section">
        <h2>{greetingsData.greetings} <span>{greetingsData.name}</span> </h2>
        <small>{greetingsData.date}</small>
      </div>
      <div className="statics-task">
        <span><div className='line'></div><p className='numbers-total'>{greetingsData.totalTasks}</p><p>Total Tasks</p></span>
         <span><div className='line' style={{background:"purple"}} ></div><p className='numbers-total'>{greetingsData.pendingtask}</p><p>Pending Tasks</p></span>
          <span><div className='line' style={{background:"blue"}}></div><p className='numbers-total'>{greetingsData.inprogresstask}</p><p>In Progress</p></span>
           <span><div className='line' style={{background:"green"}}></div><p className='numbers-total'>{greetingsData.completedtasks}</p><p>Completed Tasks</p></span>
      </div>
    </div>
  )
}

export default Goodday   

