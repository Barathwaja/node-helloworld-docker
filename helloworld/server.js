const express = require('express');
const app = express();
const port = process.env.port || 9000;
const axios = require('axios');

const extBaseUrl = 'https://jsonplaceholder.typicode.com';

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

app.get('/employee', async (req, res) => {
    const extEndPoint = `${extBaseUrl}/posts`;

    try {
        const getResponse = await axios.get(extEndPoint);
        return res.json({
            'message': getResponse.data
        });
    } catch(e) {
        console.log(e);
        return res.status(500).json({
                'message': 'error'
        });
    }
});

/* Listening Port */
app.listen(port, () => {
    console.log(`Listening to the port - ${port}`);
});