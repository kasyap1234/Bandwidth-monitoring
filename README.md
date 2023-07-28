# React Application Documentation

This repository contains a React application that provides bandwidth monitoring functionality and displays network statistics using charts.

## Overview

The React application consists of the following components:

- `Home` component: Displays the network speed values and ping time, and provides options to stop the measurement, download the network statistics file, and view the chart.
- `LineChart` component: Renders a line chart that displays the network download and upload speeds over time.
- `RoutesPath` component: Handles the routing of different pages within the application.

## Prerequisites

Before using this code, make sure you have the following dependencies installed:

- React
- MUI (Material-UI)
- Axios
- react-chartjs-2

## Installation

To install the required dependencies,  run the following command:

```
npm install react mui axios react-chartjs-2
```

## Usage

To use the React application, follow these steps:

1. Import the required modules in the respective components:

   - `Home` component:

   ```javascript
   import React, { useState } from 'react';
   import Button from '@mui/material/Button';
   import useInterval from './useInterval';
   import Axios from 'axios';
   import './App.css';
   import Divider from '@mui/material/Divider';
   import DownloadIcon from '@mui/icons-material/Download';
   import UploadIcon from '@mui/icons-material/Upload';
   import NetworkPingIcon from '@mui/icons-material/NetworkPing';
   import LineChart from './LineChart';
   ```

   - `LineChart` component:

   ```javascript
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
   ```

   - `RoutesPath` component:

   ```javascript
   import React from 'react';
   import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
   import SignupPage from './SignupPage';
   import LineChart from './LineChart';
   import Home from './Home';
   import LoginPage from './LoginPage';
   ```

2. Define the components and their functionalities:

   - `Home` component:

   ```javascript
   // Implementation details...
   ```

   - `LineChart` component:

   ```javascript
   // Implementation details...
   ```

   - `RoutesPath` component:

   ```javascript
   // Implementation details...
   ```

3. Export the components for use in other modules:

   - `Home` component:

   ```javascript
   export default function Home() {
     // Implementation details...
   }
   ```

   - `LineChart` component:

   ```javascript
   const LineChart = () => {
     // Implementation details...
   };

   export default LineChart;
   ```

   - `RoutesPath` component:

   ```javascript
   const RoutesPath = () => {
     // Implementation details...
   };

   export default RoutesPath;
   ```

## Conclusion

This documentation provides an overview of the React application and its components for bandwidth monitoring and chart visualization. Follow the provided instructions to set up and use the application in your React project.

# Express Router Documentation

This repository contains an Express router in Node.js that exposes various API routes for network statistics and measurements.

## Overview

This Express router provides the following API routes:

- `/network-stats` - Fetches the latest network statistics.
- `/graph-data` - Fetches network statistics for the graph.
- `/download-file` - Initiates the download of the network statistics file.
- `/stop-measurement` - Stops the network measurement.
- `/delete-measurement` - Deletes the measurement file.

## Prerequisites

Before using this code, make sure you have the following dependencies installed:

- Node.js
- Express.js
- fs (File System) module

## Installation

To install the required dependencies, run the following command:

```
npm install express fs
```

## Usage

To use the Express router, follow these steps:

1. Import the required modules:

```javascript
const express = require('express');
const router = express.Router();
const fs = require('fs');
const networkMeasurement = require('./networkMeasurement');
const path = require('path');
```

2. Define the API routes for fetching network statistics and graph data:

```javascript
// API route to fetch the latest network statistics
router.get('/network-stats', (req, res) => {
  // Implementation details...
});

// API route to fetch network statistics for the graph
router.get('/graph-data', (req, res) => {
  // Implementation details...
});

// API route to download the file
router.get('/download-file', (req, res) => {
  // Implementation details...
});

// API route to stop the measurement
router.get('/stop-measurement', (req, res) => {
  // Implementation details...
});

// API route to delete the measurement file
router.delete('/delete-measurement', (req, res) => {
  // Implementation details...
});
```

3. Export the router for use in other modules:

```javascript
module.exports = router;
```

## File Structure

The code assumes the existence of a file named `network-stats.txt` in the same directory. The path to the file is determined using the `__dirname` variable.

```javascript
const PathLink = path.join(__dirname, 'network-stats.txt');
```

Make sure the file exists and contains valid JSON data before using the API routes.

## Conclusion

This documentation provides an overview of the Express router and its API routes for network statistics and measurements. Follow the provided instructions to set up and use the router in your Node.js application.
