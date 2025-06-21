// server/app.js
const express = require('express');
const cors = require('cors');
const weatherRoutes = require("./routes/weather.js");

const app = express();

app.use(cors());
app.use(express.json());    
app.use('/api', weatherRoutes);

module.exports = app;