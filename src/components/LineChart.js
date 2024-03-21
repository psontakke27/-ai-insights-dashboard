import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const LineChartComponent = ({ data }) => {
  return (
    <LineChart width={400} height={300} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="average_time" stroke="#8884d8" />
    </LineChart>
  );
};

export default LineChartComponent;
