const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", (req, res) => {
    res.send("we are on posts...");
});
// Add Post
router.get("/add-post", (req, res) => {
    let post = { title: "Post Three", body: "This is post three." };
    let sql = "INSERT INTO posts SET ?";
    db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Posts added...");
    });
});
// Fetch All posts
router.get("/get-all-posts", (req, res) => {
    let sql = "SELECT * from posts";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Posts fetched...");
    });
});
// Get post by id
router.get("/get-post/:id", (req, res) => {
    let sql = `SELECT * from posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(`Post of id ${req.params.id} fetched...`);
    });
});
// Update post by id
router.get("/update-post/:id", (req, res) => {
    let title = "Updated Title";
    let sql = `UPDATE posts SET title = '${title}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(`Post of id ${req.params.id} updated...`);
    });
});
// Delete post by id
router.get("/delete-post/:id", (req, res) => {
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(`Post of id ${req.params.id} deleted...`);
    });
});

// Post Request
router.post("/post-to-mongoose", (req, res) => {
    console.log("posts req body==>", req.body);
});

module.exports = router;