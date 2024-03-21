
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions';
import BarChartComponent from './BarChart';
import LineChartComponent from './LineChart' 
import PieChartComponent from './PieChart'; 

const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="dashboard">
      <h1>AI Insights Dashboard</h1>
      <div className="chart-container">
        <div className="chart">
          {data && <BarChartComponent data={data.category_distribution} />}
        </div>
        <div className="chart">
          {data && <LineChartComponent data={data.response_times.day_wise} />}
        </div>
        <div className="chart">
          {data && <PieChartComponent data={data.user_satisfaction.ratings} />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
