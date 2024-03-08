const express = require("express");
const app = express();
const userRouter = require("./Routers/UserRourter");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use((req, res, next) => {
  console.log("req body", req.body);
  next();
});

//routes Section
app.use("/api/v1/users", userRouter);

module.exports = app;