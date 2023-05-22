import React, { useState } from 'react';
import Button from '@mui/material/Button';
import useInterval from './useInterval'; // Import the useInterval hook
import Axios from 'axios';
import './App.css';
import Divider from '@mui/material/Divider';

function App() {
  const [data, setData] = useState({ download: 0, upload: 0, ping: 0 });
  const [measurementRunning, setMeasurementRunning] = useState(true); // Track measurement running state

  // Fetch network stats function
  const fetchNetworkStats = async () => {
    try {
      const response = await Axios.get('http://localhost:3300/api/network-stats');
      setData(response.data);
    } catch (error) {
      console.error('Failed to fetch network statistics:', error);
    }
  };

  // Define the polling interval (in milliseconds)
  const pollingInterval = 5000;

  // Use the useInterval hook to periodically fetch network stats
  useInterval(fetchNetworkStats, pollingInterval, measurementRunning);

  // Function to stop the measurement and clear the interval
  const stopMeasurement = () => {
    setMeasurementRunning(false);
  };

  return (
    <div className="App">
      <div className="container">
        <h2 className="heading" style={{fontWeight: 700}}>Bandwidth Monitoring</h2>
        <div className="speeds">
          <div className="download">
            <h4 className="speed-label" style={{fontWeight: 700}}>Download Speed</h4>
            <h2 className="speed-value" style={{color: '#587DFE'}}>{data.downloadSpeed}</h2>
          </div>
          <div className="upload">
            <h4 className="speed-label" style={{fontWeight: 700}}>Upload Speed</h4>
            <h2 className="speed-value" style={{color: '#FEA62C'}}>{data.uploadSpeed}</h2>
          </div>
        </div>
        <Divider />
        <div className="ping">
          <h5 className="ping-label">Ping</h5>
          <p className="ping-value">{data.pingTime}</p>
        </div>
        {measurementRunning && (
          <Button variant="contained" onClick={stopMeasurement} className="stop-button">
            Stop Measurement
          </Button>
        )}
      </div>
    </div>
  );
}

export default App;


