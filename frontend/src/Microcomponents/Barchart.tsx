import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import '../Styles/Micocompnent.styles/Barchart.scss';

const Barchart: React.FC = () => {
  const data = [
    { name: 'Total', tasks: 10, color: '#4B9EFF' },
    { name: 'Pending', tasks: 2, color: '#FFB347' },
    { name: 'In Progress', tasks: 3, color: '#FFD700' },
    { name: 'Completed', tasks: 5, color: '#9ACD32' },
  ];

  return (
    <div className="bar-chart-wrapper">
      <h3 className="chart-title">Task Overview</h3>
      <div className="chart-box">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barCategoryGap="20%"
          >
            <XAxis
              dataKey="name"
              stroke="#555"
              tickLine={false}
              axisLine={{ stroke: '#ddd' }}
              tick={{ fontSize: 14 }}
            />
            <YAxis
              stroke="#555"
              allowDecimals={false}
              tickLine={false}
              axisLine={{ stroke: '#ddd' }}
              tick={{ fontSize: 14 }}
            />
            <Tooltip
              cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
              contentStyle={{ borderRadius: 8, borderColor: '#ccc' }}
            />
            <Bar
              dataKey="tasks"
              radius={[6, 6, 0, 0]} // Rounded top corners
              maxBarSize={50} // max bar width
              barSize={40} // fixed bar width (can adjust)
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Barchart;
