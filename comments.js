// Create web server
const express = require('express');
const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get all comments
app.get('/api/comments', (req, res) => {
    res.json(comments);
});

// Create a new comment
app.post('/api/comments', (req, res) => {
    const newComment = req.body;
    newComment.id = comments.length.toString();
    comments.push(newComment);
    res.json(newComment);
});

// Update a comment
app.put('/api/comments/:id', (req, res) => {
    const id = req.params.id;
    const updatedComment = req.body;
    const index = comments.findIndex(comment => comment.id === id);
    comments[index] = updatedComment;
    res.json(updatedComment);
});

// Delete a comment
app.delete('/api/comments/:id', (req, res) => {
    const id = req.params.id;
    comments = comments.filter(comment => comment.id !== id);
    res.json({ message: 'Comment deleted' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Comments data
let comments = [];