const express = require('express');
const app = express();
const bodyParser = require("body-parser");  

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const teacherRouter = require("./routers/teacherRouter.js");
const studentRouter = require("./routers/studentRouter.js")
//View
const layouts = require("express-ejs-layouts");
app.set("view engine", "ejs");
app.use(layouts);

app.set("port", process.env.PORT || 3000);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

//홈페이지
app.get('/', (req, res) => {
  res.render('home.ejs');
});

//선생님 페이지
app.use("/teacher", teacherRouter);

//학생 페이지
app.get('/student', (req, res) => {
    res.send('student page');
});

//About Us
app.get('/about', (req, res) => {
  res.send('Welcome');
});

//Recruit
app.get('/recruit', (req, res) => {
  res.send('Nice');
});

//Sign In
app.get('/join', (req, res) => {
  res.send('input details');
});

//Login
app.get('/login', (req, res) => {
  res.send('login page');
});

app.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}`)
});