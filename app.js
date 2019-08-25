const express = require("express");
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodeapp"
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected...")
});

const app = express();

app.listen("3000", () => { console.log("Listening on 3000...") });

app.get("/", () => {
    // app.write("Hey!");
});
// Add Post
app.get("/add-post", (req, res) => {
    let post = { title: "Post One", body: "This is post one." };
    let sql = "INSERT INTO posts SET ?";
    db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Posts one added...");
    });
});
// Fetch All posts
app.get("/get-all-posts", (req, res) => {
    let sql = "SELECT * from posts";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Posts fetched...");
    });
});
// Get post by id
app.get("/get-post/:id", (req, res) => {
    let sql = `SELECT * from posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(`Post of id ${req.params.id} fetched...`);
    });
});
