const express = require("express");
const mysql = require("mysql");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const app = express();

// Import Routes
const postsRoute = require("./routes/posts");

// ** DB Connection to MySQL  ** //
// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

// db.connect((err) => {
//     if (err) throw err;
//     console.log("Connected...")
// });

// ** DB Connection to Mongoose DB ** //
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log("Connected to Mongoose DB!")
);

app.listen("3000", () => { console.log("Listening on 3000...") });

app.use(bodyParser.json());

// Routers Middleware
app.use("/posts", postsRoute);


app.get("/", (req, res) => { res.send("This is home page"); });
