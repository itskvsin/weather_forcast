// // require('dotenv').config();
// const dotenv = require("dotenv");
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// // Load environment variables first
// dotenv.config();

// const app = express();

// //middlewares
// app.use(cors());
// app.use(express.json());

// //route
// app.get("/api/test", (req, res) => {
//   res.status(200).json({ message: "Forcast Api route" });
// });


// //mongoose connection
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log("DB Connected");
//   })
//   .catch((err) => console.log(err));

// //start Server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


// server/server.js
const express = require('express');
const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});