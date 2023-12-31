const express = require("express");
const tourRouter = require("./routes/tour.router");

const app = express();
app.use(express.json());

app.use("/api/v1/tours", tourRouter);

module.exports = app;