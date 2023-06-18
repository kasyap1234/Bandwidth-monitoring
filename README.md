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
