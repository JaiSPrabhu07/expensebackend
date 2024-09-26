const express = require("express");

const app = express(); //express app, act as a middleware

const bodyParser = require("body-parser"); //imnport body-parser

const userRoutes=require('./routes/user');
const expenseRoutes=require('./routes/expense');

const mongoose = require("mongoose");
//'mongodb+srv://jaisprabhu1:<db_password>@cluster0.jhnjk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect('mongodb+srv://jaisprabhu1:R8kJDMBORZKt5Fza@cluster0.jhnjk.mongodb.net/expenseTracker')
.then(()=>{
  console.log("Connected to database");
})
.catch((e)=>{
  console.log("Not able to connect to database",e);
})


app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,authentication",
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,DELETE,PATCH,OPTIONS"
  );
  next();
});

app.use('/v1/api',expenseRoutes);
app.use('/v1/api/USER',userRoutes);

module.exports = app;
