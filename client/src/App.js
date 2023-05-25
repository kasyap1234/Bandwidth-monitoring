import React, { useState} from 'react';
import Button from '@mui/material/Button';
import useInterval from './useInterval'; 
import Axios from 'axios';
import './App.css';
import Divider from '@mui/material/Divider';
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import NetworkPingIcon from '@mui/icons-material/NetworkPing';
import LineChart from './LineChart';


function App() {
  const [data, setData] = useState({ download: 0, upload: 0, ping: 0 });
  const [measurementRunning, setMeasurementRunning] = useState(true); 
  

  // Fetch network stats function
  const fetchNetworkStats = async () => {
    try {
      const response = await Axios.get('http://localhost:3300/api/network-stats');
      setData(response.data);
    } catch (error) {
      console.error('Failed to fetch network statistics:', error);
    }
  };


  const pollingInterval = 5000;

 
  useInterval(fetchNetworkStats, pollingInterval, measurementRunning);

  // Function to stop the measurement and clear the interval
  const stopMeasurement = () => {
    setMeasurementRunning(false);
  };
  const deleteGraphData = () => {
    Axios.delete('http://localhost:3300/api/graph-data').then((response)=>{
      console.log(response);
      
    })

  return (
    <div className="App">
      <div className="container">
        <h2 className="heading" style={{fontWeight: 700,fontSize: '26px'}}>Bandwidth Monitoring</h2>
        <div className="speeds">
          <div className="download">
            <div className="download-icon-placeholder">
            <DownloadIcon className="download-icon" style={{marginTop: '16px',marginRight: '5px'}}  />
            <h4 className="speed-label" style={{fontWeight: 400}}>Download Speed</h4>
            </div> 
            <h2 className="speed-value" style={{color: '#587DFE',marginTop: '5px'}}>{data.downloadSpeed}</h2>
          </div>
          <div className="upload">
            <div className="upload-icon-placeholder">
            <UploadIcon className="upload-icon"  style={{marginTop: '16px',marginRight: '5px'}}/>
            <h4 className="speed-label" style={{fontWeight: 400}}>Upload Speed</h4>
            </div> 
            <h2 className="speed-value" style={{color: '#FEA62C',marginTop: '5px'}}>{data.uploadSpeed}</h2>
          </div>
        </div>
        <Divider />
        <div className="ping">
          <div className="ping-icon-placeholder" style={{display:'flex'}}>
          <NetworkPingIcon className="ping-icon" style={{marginTop: '16px',marginRight: '5px'}}/>
          <h5 className="ping-label" style={{fontWeight: 400}}>Ping</h5>
          </div> 
          <p className="ping-value">{data.pingTime}</p>
        </div>
        {measurementRunning && (
          <Button variant="contained" onClick={stopMeasurement} className="stop-button">
            Stop Measurement
          </Button>
        )}
 <div className="chart"> 
<LineChart />

      </div>
      </div>
    </div>
  );
}

export default App;
