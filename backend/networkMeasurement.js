// networkMeasurement.js
const NetworkSpeed = require('network-speed');
const testNetworkSpeed = new NetworkSpeed();
const ping = require('ping');
const fs = require('fs');

const measurementInterval = 5000; // Interval in milliseconds
let measurementIntervalId = null; // Interval ID for measurement task

// Function to measure and save network statistics
const measureNetworkStats = async () => {
  try {
    const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000';
    const downloadSizeInBytes = 500000;
    const uploadOptions = {
      hostname: 'www.google.com',
      port: 80,
      path: '/catchers/544b09b4599c1d0200000289',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const uploadSizeInBytes = 2000000;

    // Check download speed
    const downloadSpeed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, downloadSizeInBytes);
    console.log('Download speed:', downloadSpeed);

    // Check upload speed
    const uploadSpeed = await testNetworkSpeed.checkUploadSpeed(uploadOptions, uploadSizeInBytes);
    console.log('Upload speed:', uploadSpeed);

    // Perform ping
    const host = 'www.google.com';
    const pingResult = await ping.promise.probe(host);
    console.log('Ping result:', pingResult);
    
    // Extract the ping value from the result
    const pingTime = pingResult.time;

    const data = {
      downloadSpeed: downloadSpeed.mbps,
      uploadSpeed: (uploadSpeed.mbps/5).toFixed(2),
      pingTime
    };

    // Save the measurement data to a file
    fs.appendFile('network-stats.txt', JSON.stringify(data) + '\n', (err) => {
      if (err) {
        console.error('Failed to save network statistics:', err);
      }
    });
  } catch (error) {
    console.error('Failed to retrieve network statistics:', error);
  }
};

// Function to start measuring network stats at the specified interval
const startNetworkMeasurement = () => {
  measurementIntervalId = setInterval(measureNetworkStats, measurementInterval);
};

// Function to stop measuring network stats
const stopNetworkMeasurement = () => {
  clearInterval(measurementIntervalId);
};

module.exports = {
  startNetworkMeasurement,
  stopNetworkMeasurement
};

