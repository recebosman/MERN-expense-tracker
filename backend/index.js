const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dot = require("dotenv");

// env config
dot.config();
// use middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.json());

// routers
app.use(require("./routes/route"));
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// listen to port
app.listen(4000, () => {
  console.log("Server running on port 4000");
});
