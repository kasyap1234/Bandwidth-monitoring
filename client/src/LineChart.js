import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import useInterval from './useInterval';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Network Speeds (Mbps)',
    },
  },
};

const LineChart = () => {
  const [chartData, setChartData] = useState(null);

  const fetchChartData = async () => {
    try {
      const response = await axios.get('http://localhost:3300/api/graph-data');
      const data = response.data;
      const filteredData = data.filter(item => parseFloat(item.downloadSpeed) < 4000);
     
       

      const chartData = {
        labels: data.map((item, index) => index + 100),
        datasets: [
          {
            label: 'Download Speed',
            data: filteredData.map(item => parseFloat(item.downloadSpeed)),
            borderColor: '#FEA62B',
            fill: false
          },
          {
            label: 'Upload Speed',
            data: filteredData.map(item => parseFloat(item.uploadSpeed)),
            borderColor: '#325FF7',
            fill: false
          },
          
        ]
      };

      setChartData(chartData);
    } catch (error) {
      console.log('Error fetching chart data:', error);
    }
  };

  useEffect(() => {
    fetchChartData();
  }, []);

  useInterval(fetchChartData, 50000); // Fetch data every 5 seconds

  if (!chartData) {
    return <div>Loading chart data...</div>;
  }

  return <Line data={chartData} options={options}
  width={400} // Set desired width
      height={400} // Set desired height />;
  />
}; 
export default LineChart;




