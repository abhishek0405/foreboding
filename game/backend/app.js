const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

const path = require("path");
const cors = require("cors");
app.use(express.json());
require("dotenv").config();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://localhost:8085"],
  })
);
const connectDB = require("./config/db");
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.use((req, res, next) => {
  console.log(`${req.method}: ${req.url}`);
  return next();
});

const basicRoutes = require("./routes/basicRoutes");

app.use("/check", basicRoutes);


app.listen(process.env.PORT || 5000, function () {
  console.log("Server Started at http://localhost:5000/");
});
