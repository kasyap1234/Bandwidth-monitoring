const express = require('express');
const app = express();
const port = 3300;
const NetworkSpeed = require('network-speed');
const testNetworkSpeed = new NetworkSpeed();

app.get('/api/download-speed', async (req, res) => {
  try {
    const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000';
    const fileSizeInBytes = 500000;
    const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
    console.log('Download speed:', speed);
    res.json({ speed });
  } catch (error) {
    console.error('Failed to retrieve download speed:', error);
    res.status(500).json({ error: 'Failed to retrieve download speed' });
  }
});

app.get('/api/upload-speed', async (req, res) => {
  try {
    const options = {
      hostname: 'www.google.com',
      port: 80,
      path: '/catchers/544b09b4599c1d0200000289',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const fileSizeInBytes = 2000000;
    const speed = await testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytes);
    console.log('Upload speed:', speed);
    res.json({ speed });
  } catch (error) {
    console.error('Failed to retrieve upload speed:', error);
    res.status(500).json({ error: 'Failed to retrieve upload speed' });
  }
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));



