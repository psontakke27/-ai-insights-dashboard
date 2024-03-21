import React from 'react';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';

const PieChartComponent = ({ data }) => {
  return (
    <PieChart width={400} height={300}>
      <Pie data={data} dataKey="count" nameKey="rating" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartComponent;
