import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/actions';
import BarChartComponent from './components/BarChart';
import LineChartComponent from './components/LineChart'; 
import PieChartComponent from './components/PieChart'; 
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="app">
      <h1>AI Insights Dashboard</h1>

      <div className="charts-container">
        <div className="chart">
          <h2>Category Distribution</h2>
          {data && <BarChartComponent data={data.category_distribution} />}
        </div>

        <div className="chart">
          <h2>Response Times</h2>
          {data && <LineChartComponent data={data.response_times.day_wise} />} {/* Use LineChartComponent here */}
        </div>

        <div className="chart">
          <h2>User Satisfaction</h2>
          {data && <PieChartComponent data={data.user_satisfaction.ratings} />} {/* Use PieChartComponent here */}
        </div>

        <div className="chart">
          <h2>Usage Statistics</h2>
          {data && (
            <>
              <BarChartComponent data={data.usage_statistics.by_platform} />
              <PieChartComponent data={Object.entries(data.usage_statistics.by_country).map(([country, value]) => ({ country, value }))} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

