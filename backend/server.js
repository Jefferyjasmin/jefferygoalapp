const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const goalRoutes = require("./routes/goalRoutes");
const app = express();
const { errorHandler } = require("./middleware/errorMiddleware");

//middleWare
// this is need to read body data
//which is part of req object which is sent by front end
// body parser for json objects
app.use(express.json());
// urlencoded
app.use(express.urlencoded({ extended: false }));
//middleWare

app.use("/api/goals", goalRoutes);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server Started on ${port}`);
});
