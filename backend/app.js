// app.js
const express = require('express');
const app = express();
const port = 3300;
const networkMeasurement = require('./networkMeasurement');
const routes = require('./routes');

// Start network measurement
networkMeasurement.startNetworkMeasurement();

// Use the routes
app.use('/api', routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));





