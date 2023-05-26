// routes.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const networkMeasurement = require('./networkMeasurement');
const path=require('path'); 
const PathLink=path.join(__dirname,'./network-stats.txt');
// API route to fetch the latest network statistics
router.get('/network-stats', (req, res) => {
  // Read the network statistics from the file and return the latest data
  fs.readFile('network-stats.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Failed to read network statistics:', err);
      return res.status(500).json({ error: 'Failed to read network statistics' });
    }

    // Parse the data as JSON
    const measurements = data.split('\n').filter(Boolean).map(JSON.parse);

    // Get the latest measurement
    const latestMeasurement = measurements[measurements.length - 1];

    res.json(latestMeasurement);
  });
});

// API route to fetch network statistics for the graph
router.get('/graph-data', (req, res) => {
  // Read the network statistics from the file
  fs.readFile('network-stats.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Failed to read network statistics:', err);
      return res.status(500).json({ error: 'Failed to read network statistics' });
    }

    // Parse the data as JSON
    const measurements = data.split('\n').filter(Boolean).map(JSON.parse);

    // Extract the required data for the graph
    const graphData = measurements.map((measurement, index) => ({
      index: index + 1,
      downloadSpeed: measurement.downloadSpeed,
      uploadSpeed: measurement.uploadSpeed,
      pingTime: measurement.pingTime,
    }));

    res.json(graphData);
  });
});


router.get('/stop-measurement', (req, res) => {
  networkMeasurement.stopNetworkMeasurement();
  res.json({ message: 'Measurement stopped' });
});
router.delete('/delete-measurement', (req, res) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting file:', err);
      res.status(500).send('Error deleting file');
    } else {
      console.log('File deleted successfully');
      res.sendStatus(200);
    }
  });
});

module.exports = router;


