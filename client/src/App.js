
import './App.css';
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
function App() {
  const [data,setData]=useState({download:0,upload:0,ping:0}); 
  useEffect(()=>{
    Axios.get('http://localhost:3300/api/network-stats').then((response)=>{
      setData(response.data);
  })
  ;}
  ,[]); 
      return (
    <div className="App">
      <div className="display">
      <h3> Bandwidth Monitoring </h3> 
    <div className="speeds"> 
    <div className="download">
      <h4 style={{paddingRight: '40px'}}>Download Speed </h4>
      <h2> {data.download} </h2>
  </div> 
  <div className="upload">
      <h4> Upload Speed </h4>
      <h2> {data.upload} </h2>
    </div>
      </div>
      <div className="ping"> 
      <h5 style={{color: '#282828'}}>Ping </h5>

      </div> 

      </div>
      <Button variant="contained">Stop Measurement</Button>

    </div>
  );
}


export default App;
