const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits', 1);

app.get('/', (req, res) => {
    // Handling the crashes
    // process.exit(1);
    client.get('visits', (err, visits) => {
        res.send(`<br> <br> <br> <br> <br> <br> <h4>Number of visits: ${visits}</h4>`);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('Server is running on port 8081 in container but 4001 in host machine');
});
