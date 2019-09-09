const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Get All posts
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});
// Get post by ID
router.get("/:id", async (req, res) => {
    try {
        console.log(req.params.id)
        const post = await Post.findById(req.params.id);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});
// Add Post
router.post("/", async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const postSaved = await post.save();
        res.json(postSaved);
    } catch (err) {
        res.json({ message: err });
    }
});
// Update Post
router.patch("/:id", async (req, res) => {
    try {
        const postUpdated = await Post.updateOne({ _id: req.params.id }, { $set: { title: req.body.title } });
        res.json(postUpdated);
    } catch (err) {
        res.json({ message: err });
    }
});
// Delete Post
router.delete("/:id", async (req, res) => {
    try {
        const deletedPost = await Post.remove({ _id: req.params.id });
        res.json(deletedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

// ** MYSQL RELATED ** //
// // Add Post
// router.get("/add-post", (req, res) => {
//     let post = { title: "Post Three", body: "This is post three." };
//     let sql = "INSERT INTO posts SET ?";
//     db.query(sql, post, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         res.send("Posts added...");
//     });
// });
// // Fetch All posts
// router.get("/get-all-posts", (req, res) => {
//     let sql = "SELECT * from posts";
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         res.send("Posts fetched...");
//     });
// });
// // Get post by id
// router.get("/get-post/:id", (req, res) => {
//     let sql = `SELECT * from posts WHERE id = ${req.params.id}`;
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         res.send(`Post of id ${req.params.id} fetched...`);
//     });
// });
// // Update post by id
// router.get("/update-post/:id", (req, res) => {
//     let title = "Updated Title";
//     let sql = `UPDATE posts SET title = '${title}' WHERE id = ${req.params.id}`;
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         res.send(`Post of id ${req.params.id} updated...`);
//     });
// });
// // Delete post by id
// router.get("/delete-post/:id", (req, res) => {
//     let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         res.send(`Post of id ${req.params.id} deleted...`);
//     });
// });

module.exports = router;