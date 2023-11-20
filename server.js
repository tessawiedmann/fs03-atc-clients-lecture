const characters = require('./characters');
const express = require('express');

const app = express();
const port = 3000;
app.listen(port, () => {
    console.log('the server has started!');
});
const tessa = 19;
app.get('/characters', (request, response) => {
    console.log(`received a request to ${request.path}`);
    response.send(characters)
});
