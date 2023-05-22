const express = require('express');
const app = express();
const port = 3300;
const NetworkSpeed = require('network-speed');
const testNetworkSpeed = new NetworkSpeed();
const ping = require('ping');

app.get('/api/network-stats', async (req, res) => {
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

    res.json({ 
      downloadSpeed: downloadSpeed.mbps,
      uploadSpeed: uploadSpeed.mbps,
      pingTime
    });
  } catch (error) {
    console.error('Failed to retrieve network statistics:', error);
    res.status(500).json({ error: 'Failed to retrieve network statistics' });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


