const express = require('express');
const app = express();
const port = process.env.port || 9000;

app.get('/', (req, res) => {
    return res.json({
        'message': 'Root Path'
    });
});

app.get('/hello', (req, res) => {
    return res.json({
        'message': 'Hello World'
    });
});

app.listen(port, () => {
    console.log(`Listening to the port - ${port}`);
});