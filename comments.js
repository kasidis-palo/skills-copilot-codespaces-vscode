// create web server
const express = require('express');
const app = express();
// create a route
app.get('/', (req, res) => {
    res.send('Hello World');
});
// listen to port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});