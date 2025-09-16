const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits', 1);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send(`<br> <br> <br> <br> <br> <br> <h4>Number of visits: ${visits}</h4>`);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('Server is running on port 8081');
});
