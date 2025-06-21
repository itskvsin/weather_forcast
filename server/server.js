// require('dotenv').config();
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Load environment variables first
dotenv.config();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//route
app.get("/api/test", (req, res) => {
  res.status(200).json({ message: "Forcast Api route" });
});


//mongoose connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => console.log(err));

//start Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
