const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hi There!!</h1>');
});

app.listen(8080, () => {
    console.log('Server is running on port 8080 !!');
});