import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import '../Styles/Micocompnent.styles/Piechart.scss'

interface DataProps {
  name: string;
  value: number;
  [key: string]: string | number;
}

const data: DataProps[] = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Piechart = () => {
  return (
    <div className="chart-pie-container">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Piechart;
