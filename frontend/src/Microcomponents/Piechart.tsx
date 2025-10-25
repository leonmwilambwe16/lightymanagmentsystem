
import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import '../Styles/Micocompnent.styles/Piechart.scss';
import { useTasks } from '../Context/TaskContext';

const COLORS = ['#4B9EFF', '#FFD700', '#FFB347', '#9ACD32'];

const Piechart: React.FC = () => {
  const { tasks } = useTasks();

  
  const lowCount = tasks.filter(t => t.priority === 'Low').length;
  const mediumCount = tasks.filter(t => t.priority === 'Medium').length;
  const highCount = tasks.filter(t => t.priority === 'High').length;

  
  const data = [
    { name: 'Low', value: lowCount },
    { name: 'Medium', value: mediumCount },
    { name: 'High', value: highCount },
  ];

  const displayData = data.every(d => d.value === 0)
    ? [{ name: 'No Tasks', value: 1 }]
    : data;

  return (
    <div className="chart-pie-container">
      <h3 className="chart-title">Task Priority Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={displayData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {displayData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
            contentStyle={{ borderRadius: 8, borderColor: '#ccc' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Piechart;
